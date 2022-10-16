import React from 'react' 
import Typewriter from 'react-ts-typewriter'
import './header.css'


function Header() {



  return ( 
    <div className='typewriter'>
    <h2>
      <Typewriter loop={true} text="Henry Aviles" />
      <Typewriter loop={true} text="Front End Developer" />
    </h2>
    
    </div>
  )
}


export default Header