import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import PageBuilder from './pages/PageBuilder';
import Footer from './components/Footer'


function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/page-builder' element={<PageBuilder/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
