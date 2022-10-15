import React from 'react'
import Header  from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { Route, Routes } from 'react-router-dom';

export const App = () => {

  return (
    <div>
      <Navbar />
      <div className="container">
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </div>
      <Header />
      
    </div>
  )
}

