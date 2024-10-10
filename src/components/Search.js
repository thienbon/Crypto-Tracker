import debounce from 'lodash.debounce';
import React, { useContext, useState } from 'react';
import searchIcon from '../assets/search-icon.svg';
import { CryptoContext } from "./../context/CryptoContext";
const SearchInput = ({handleSearch}) => {
  const [searchText, setsearchText] = useState("");
  let {SearchData,setCoinSearch,setSearchData} = useContext(CryptoContext);
  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setsearchText(query);
    handleSearch(query);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);

  }
  const selectCoin = (coin) =>{
    setCoinSearch(coin);
    setsearchText("");
    setSearchData();
  }
  return (
    <>
      <form className='w-96 relative flex items-center
    ml-7 font-nunito'
    onSubmit={handleSubmit}
    >
      
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
        searchText.length > 0 ?(
          <ul className='absolute top-11 right-0 w-96 h-96 rounded
        overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md'>
            {
              SearchData ? SearchData.map(coin => {return <li
              className="flex items-center ml-4 my-2 cursor-pointer hover:bg-gray-200"
              key = {coin.id}
              onClick={() => selectCoin(coin.id)}
              ><img className="w-[1rem] h-[1rem] mx-1.5"src={coin.thumb} alt={coin.name}/>
              <span>{coin.name}</span>
              </li>}) : <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin' role='status'/> 
                <span className='mt-2'>Waiting pls...</span>

              </div>
            }
          </ul>)
          :
          null
      }
    </>


  )
}
const Search = () => {

  let { getSearchResult } = useContext(CryptoContext);
  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000);




  return (
    <div className="relative">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  )
}

export default Search