import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' alt='HA logo' src={Logo}></img>
        <ul className='navbar_list'>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar