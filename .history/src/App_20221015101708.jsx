import React from 'react'
import Header  from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';

export const App = () => {
  
  let Component
  switch(window.location.pathname){
    case '/':
      Component = App
      break
    case '/about':
      Component = About
      break
    case '/projects':
      Component = Projects
      break
    case '/contact':
      Component = Contact
      break
  }
  
  
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  )
}

