import React from 'react'
import Header  from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

export const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      
    </BrowserRouter>
  )
}

