import React from 'react' 
import meBw from '../../assets/meBW.jpg'
import './header.css'
import TypewriterComponent from 'typewriter-effect'

function Header() {

  return (
    <div>
      <div className='typewriter'>
      <h1></h1>
      </div>
      <img alt="Henry Aviles" src={meBw}></img>
    </div>
  )
}


export default Header