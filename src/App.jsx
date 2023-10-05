
import { useState } from 'react'
import './App.css'
import Login from './Login'
import Register from './Register'
import React from 'react';
import Navbar from './Navbar';
import Home from './Home'; 
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Navbar />
     <Routes>
      <Route path="/" exact="true" element={<Home/>}/>
      <Route path="/login" exact="true" element={<Login/>}/>
      <Route path="/signup" exact="true" element={<Register/>}/>
     </Routes>
     
    </>
  );
};

export default App;


