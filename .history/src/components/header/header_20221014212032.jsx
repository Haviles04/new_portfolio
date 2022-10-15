import React from 'react' 
import meBw from '../../assets/meBW.jpg'
import './header.css'

function Header() {
  
  var i = 0;
  var txt = "Hi, I'm Henry! A Front End Developer!";
  var speed = 50; 
  
  function typeWriter() {
    if (i < txt.length) {
      txt += txt.charAt(i);
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