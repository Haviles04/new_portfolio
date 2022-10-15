import React from 'react'
import Header  from './components/header/Header';
import Navbar from './components/navbar/Navbar';


export const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      
    </BrowserRouter>
  )
}

