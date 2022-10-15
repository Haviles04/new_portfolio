import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='navbarList'>
            <li><Link to='about'>About</Link></li>
            <li><Link to='projects'>Projects</Link></li>
            <li><Link to='contact'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar