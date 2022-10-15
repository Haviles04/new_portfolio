import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='navbarList'>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar