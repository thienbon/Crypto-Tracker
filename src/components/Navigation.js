import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav
    className='w-[40%] mt-16 flex justify-around align-middle
    border border-cyan rounded-lg' 
    >
    <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-cyan text-gray-300"
    : "bg-gray-100 text-white hover:text-cyan active:bg-cyan active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>

    <NavLink to="/Trending"
    className={
        ({isActive}) => {
            return ` w-full text-base text-center font-nunito m-2.5
    ${isActive ? 'bg-cyan text-gray-300 ': 'bg-gray-100 text-white hover:text-cyan active:bg-cyan active:text-gray-300'}
           
            broder-0 cursor-pointer rounded capitalize font-semibold`
        }
    }
    >
    Trending
    </NavLink>

    <NavLink to="/Saved"
    className={
        ({isActive}) => {
            return ` w-full text-base text-center font-nunito m-2.5
    ${isActive ? 'bg-cyan text-gray-300 ': 'bg-gray-100 text-white hover:text-cyan active:bg-cyan active:text-gray-300'}
           
            broder-0 cursor-pointer rounded capitalize font-semibold`
        }
    }>Saved</NavLink>
    </nav>
  )
}

export default Navigation