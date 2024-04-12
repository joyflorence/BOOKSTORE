import React, { useState } from 'react';

import { BookData } from '../../../utl/BookData';
import Navbar from '../../Layouts/navbar/Navbar';

const ManageBooks = () => {
  const [books, setBooks] = useState(BookData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    bookId: null,
    bookTitle: '',
    bookDescription: '',
    bookUrl: '',
    authorName: '',
    price: '',
  });
  const [popupMessage, setPopupMessage] = useState('');

  const openModal = (bookId = null) => {
    if (bookId) {
      const bookToEdit = books.find((book) => book.id === bookId);
      setModalData({
        bookId,
        bookTitle: bookToEdit.book_title,
        bookDescription: bookToEdit.book_description,
        bookUrl: bookToEdit.book_url,
        authorName: bookToEdit.author_name,
        price: bookToEdit.price,
      });
      setIsModalOpen(true);
    } else {
      setModalData({
        bookId: null,
        bookTitle: '',
        bookDescription: '',
        bookUrl: '',
        authorName: '',
        price: '',
      });
      setPopupMessage(''); // Clear the popup message
      setIsModalOpen(true);
    }
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveChanges = () => {
    if (modalData.bookId) {
      const updatedBooks = books.map((book) => {
        if (book.id === modalData.bookId) {
          return {
            ...book,
            book_title: modalData.bookTitle,
            book_description: modalData.bookDescription,
            book_url: modalData.bookUrl,
            author_name: modalData.authorName,
            price: modalData.price,
          };
        }
        return book;
      });
      setBooks(updatedBooks);
    } else {
      const newBook = {
        id: books.length,
        book_title: modalData.bookTitle,
        book_description: modalData.bookDescription,
        book_url: modalData.bookUrl,
        author_name: modalData.authorName,
        price: modalData.price,
      };
      setBooks([...books, newBook]);
    }
    closeModal();
  };

  const handleDeleteBook = (bookId) => {
    setPopupMessage(`Are you sure you want to delete ${books.find((book) => book.id === bookId).book_title}?`);
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <Navbar darktheme={true}/>
      <div>
        <div>
          <h3>Add Book</h3>
          <button onClick={() => openModal()}>Add Book</button>
        </div>
        <div>
          <h3>Edit Book</h3>
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                {book.book_title}{' '}
                <button onClick={() => openModal(book.id)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Delete Book</h3>
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                {book.book_title}{' '}
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{modalData.bookId ? 'Edit Book' : 'Add Book'}</h3>
            <label>
              Book Title:
              <input
                type="text"
                value={modalData.bookTitle}
                onChange={(e) =>
                  setModalData({ ...modalData, bookTitle: e.target.value })
                }
              />
            </label>
            <label>
              Book Description:
              <textarea
                value={modalData.bookDescription}
                onChange={(e) =>
                  setModalData({ ...modalData, bookDescription: e.target.value })
                }
              />
            </label>
            <label>
              Book URL:
              <input
                type="text"
                value={modalData.bookUrl}
                onChange={(e) =>
                  setModalData({ ...modalData, bookUrl: e.target.value })
                }
              />
            </label>
            <label>
              Author Name:
              <input
                type="text"
                value={modalData.authorName}
                onChange={(e) =>
                  setModalData({ ...modalData, authorName: e.target.value })
                }
              />
            </label>
            <label>
              Price:
              <input
                type="text"
                value={modalData.price}
                onChange={(e) =>
                  setModalData({ ...modalData, price: e.target.value })
                }
              />
            </label>
            <div>
              <button onClick={saveChanges}>
                {modalData.bookId ? 'Save Changes' : 'Add'}
              </button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {popupMessage && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={() => setPopupMessage('')}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBooks;
