import React from 'react'
import Header  from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

export const App = () => {
  
  let component
  switch(window.location.pathname){
    case '/':
      component = <App />
      break
    case '/about':
      component = <About />
      break
    case '/projects':
      component = <Projects />
      break
    case '/contact':
      component = <Contact />
      break
  }
  
  
  return (
    <div>
      <Navbar />
      <Header />
      {component}
    </div>
  )
}

