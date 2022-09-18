import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';


function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
