import React, { useContext, useState } from 'react';
import searchIcon from '../assets/search-icon.svg';
import { CryptoContext } from "./../context/CryptoContext";

const Search = () => {
  const [searchText, setsearchText] = useState("");
  let {getSearchResult} = useContext(CryptoContext);

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setsearchText(query);
    getSearchResult(query);
  };


  return (
    <>
      <form className='w-96 relative flex items-center
    ml-7 font-nunito'>
        <input type="text" name="search"
          onChange={handleInput}
          value={searchText}
          className='w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 
      required outline-0 border border-transparent focus:border-cyan'
          placeholder='search here...' />
        <button type="submit" className='absolute right-1 cursor-pointer'>
          <img src={searchIcon} className='w-full h-auto' alt="search" />
        </button>

      </form>
      {
        searchText.length > 0 ?
        <ul className='absolute top-11 right-0 w-full h-96 rounded
        overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md'>
          <li>bitcoin</li>
          <li>etherum</li>
        </ul>
        :
        null
      }



    </>
  )
}

export default Search