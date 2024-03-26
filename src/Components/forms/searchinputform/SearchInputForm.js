import React, { useState } from 'react'
import './searchiputform.css'
import { useNavigate } from 'react-router-dom'


const SearchInputForm = ({darkTheme}) => {
  const[searchField, setSearchField] = useState('');
  const navigate = useNavigate();


  const handleChange = (e) =>{
    setSearchField(e.target.value);
  }

  const redirectToSearchPage = () =>{
   if (searchField === ''){
    alert('search field is empty')
   } else{
    navigate('/search', {state:searchField})
   }
  }


  return (
   <div className={`search-input-container ${darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}`}>
    <input
    type='text' 
    className='search-input' 
    placeholder='search books'
    value={searchField}
    onChange={handleChange}
    />


    <button onClick={redirectToSearchPage} className='search-button'>search</button>
   </div>
  );
}

export default SearchInputForm;