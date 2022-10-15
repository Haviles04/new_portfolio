import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img alt='HA logo' src={Logo}></img>
        <ul>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar