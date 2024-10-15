import React from 'react'
import paginationArrow from "../assets/pagination-arrow.svg";
const Pagination = () => {
  return (
    <div className='flex items-center'>
        <ul className='flex items-center justify-end text-sm'>
            <li className='flex items-center'>
                <button className='outline-0 hover:text-cyan w-8'>
                <img className='w-full h-auto rotate-180' src={paginationArrow} alt='left'/>

                </button>
            </li>
            <li>...</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>...</li>
            <li>Last-Page</li>
            <li>
            <img className='w-full h-auto' src={paginationArrow} alt='left'/>

            </li>


        </ul>
    </div>
  )
}

export default Pagination