import React, { useContext, useRef } from 'react'
import Search from './Search'
import submitIcon from '../assets/submit-icon.svg'
import { CryptoContext } from "./../context/CryptoContext";

const Filters = () => {
  let{setCurrency,Currency,setSortBy} = useContext(CryptoContext);
  const currencyRef = useRef(null);
  // const isValidCurrency = (val) => {
  //   return Currency.includes(val.toLowerCase());
  // };
  const handleCurrencySubmit = (e) =>{
    e.preventDefault();
    let val = currencyRef.current.value;
    if (val === "") {
      return;
    }

    setCurrency(val);
    currencyRef.current.value ="";

  }
  const handleSort = (e) =>{
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  }
  return (
    <div className='w-full h-12 border-2 border-gray-100 rounded-lg
    flex items-center justify-between relative'>
        <Search />
        <div className='flex mr-7'>
          <form className='relative flex items-center font-nunito
          mr-12' onSubmit={handleCurrencySubmit}>
            <label htmlFor='currency' className='relative flex justify-center items-center mr-2 font-bold'>currency: </label>
            <input type='text' name='currency' ref={currencyRef} placeholder='usd' className=' w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 
            border border-transparent focus:border-cyan leading-4'/>
            <button type='submit' className='ml-1 cursor-pointer'>
              <img src={submitIcon} alt='submit' className='w-full h-auto'/>
            </button>
          </form>
          <label className='relative flex justify-center items-center'>
          <span className='font-bold mr-2'>Sort by:</span>
          <select name='Sortby' className='rounded bg-gray-200 text-base pl-2 pr-10 py-1.5 leading-4 capitalize focus:outline-0 '
          onClick={handleSort}
          >
            <option value="market_cap_desc">market cap desc</option>
            <option value="market_cap_asc">market cap asc</option>
            <option value="volume_asc">volume asc</option>
            <option value="volume_desc">volume desc</option>
            <option value="id_asc">id asc</option>
            <option value="id_desc">id desc</option>



          </select>

        </label>
        </div>
        
    </div>
  )
}

export default Filters