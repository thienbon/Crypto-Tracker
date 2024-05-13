import React from 'react'
import { Link } from 'react-router-dom'
import logoSvg from "../assets/logo.svg"

const Logo = () => {
  return (
    <Link to="/"
    >
        <img src={logoSvg} alt="CryptoBucks"/>
    
    </Link>
  )
}

export default Logo