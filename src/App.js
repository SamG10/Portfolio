// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BtnScrollToTop from './components/BtnScrollToTop';
import Home from './pages/Home.jsx';


function App() {
  return <>
    <BrowserRouter>
      <Navbar/>
      <BtnScrollToTop/>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
    </BrowserRouter>
  </>
}

export default App;
