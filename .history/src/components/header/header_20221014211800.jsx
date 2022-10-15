import React from 'react' 
import meBw from '../../assets/meBW.jpg'
import './header.css'

function Header() {
  
  const typewriter =  "Hi! I'm Henry, a Front End Developer"


  return (
    <div>
      <div className='typewriter'>
      <h1>Hi, I'm Henry! A Front End Developer!</h1>
      </div>
      <img alt="Henry Aviles" src={meBw}></img>
    </div>
  )
}


export default Header