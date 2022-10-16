import React from 'react' 
import meBw from '../../assets/meBW.jpg'
import './header.css'


function Header() {



  return (
    <div>
      <div className='typewriter'>
      <h1 className='headerH1'>Henry Aviles</h1>
      <h2 className='headerH2'>Front End Developer</h2>
      </div>
      <img alt="Henry Aviles" src={meBw}></img>
    </div>
  )
}


export default Header