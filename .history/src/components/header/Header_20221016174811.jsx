import React from 'react' 
import Typewriter from 'react-ts-typewriter'
import './header.css'


function Header() {



  return ( 
    <div className='typewriter'>
    <h1>
      <Typewriter loop={true} text="Henry Aviles Front End Developer" />
    </h1>
    
    </div>
  )
}


export default Header