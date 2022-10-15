import React from 'react' 
import meBw from '../../assets/meBW.jpg'
import './header.css'

function Header() {
  
  let i = 0;
  let txt = "Hi, I'm Henry! A Front End Developer!";
  let speed = 50; 
  let final = " ";
  
  function typeWriter() {
    if (i < txt.length) {
      final += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  return (
    <div>
      <div className='typewriter'>
      <h1>{typeWriter}</h1>
      </div>
      <img alt="Henry Aviles" src={meBw}></img>
    </div>
  )
}


export default Header