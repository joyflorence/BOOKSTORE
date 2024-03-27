import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Components/Layouts/navbar/Navbar'
import Footer from '../../Components/Layouts/footer/Footer'
import './searchpage.css'
import { BookData } from '../../utl/BookData'
import SearchResultCard from '../../Components/cards/search-result-card/SearchResultCard'


const SearchPage = () => {
    const location = useLocation();
    const [searchResult, setSearchResult] = useState([]);


    useEffect(()=>{
        let searchvalue = [];
        searchvalue = BookData.filter((data)=>data.book_title.toLowerCase().includes(location.state.toLowerCase()))
        
        setSearchResult(searchvalue);
    },[])
  return (
   <section>
    <Navbar darktheme={true}/>
    <div className='Search-result-container'>
        <div className='container'>
           
            {searchResult.map((result)=>(
                <SearchResultCard key={result.id} bookData={result}/>
            ))}
        </div>

    </div>
    <Footer/>
   </section>
  )
}

export default SearchPage;