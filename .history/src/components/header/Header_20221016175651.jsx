import React from 'react' 
import Typewriter from 'react-ts-typewriter'
import './header.css'


function Header() {



  return ( 
    <div className='typewriter'>
    <h2 className='typewriterName'>
      <Typewriter speed={30} text="Henry Aviles" />
    </h2>
    <h2 className='typewriterDesc'>
      <Typewriter speed={30} loop={true} text="Front End Developer" />
    </h2>
    
    </div>
  )
}


export default Header