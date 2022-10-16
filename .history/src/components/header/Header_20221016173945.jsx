import React from 'react' 
import TypewriterComponent from 'typewriter-effect';
import './header.css'


function Header() {



  return (
    <div>
      <div className='typewriter'>
      <TypewriterComponent
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Henry Aviles")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Front End Developer")
       .start();
       }}
       />
    </div>
    </div>
  )
}


export default Header