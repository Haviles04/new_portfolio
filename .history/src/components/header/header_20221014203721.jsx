import React from 'react' 
import meBw from '../../assets/meBw.jpg'

function Header() {
  return (
    <div>
      <h1 className='line anim-typewriter'>Hi, I'm Henry! A Front End Developer!</h1>
      <img alt="Henry Aviles" src={meBw}></img>
    </div>
  )
}


export default Header