import React, { useState } from 'react';
import Equipment from './Components/Equipments';
import Advisor from './advisor';
import Livestock from './Livestocks'; 
import Crop from './Crop';
import './App.css'
import Login from './Login'
import Register from './Register'
import Navbar from './Navbar';
import Home from './Home'; 
import { Route, Routes } from 'react-router-dom';
import Cards from './Cards';
import Finance from './Components/Finance'


const App = () => {
   
  return(
    <>
      <Navbar />
    <Advisor />
     <Routes>
      <Route path="/" exact="true" element={<Home/>}/>
      <Route path="/login" exact="true" element={<Login/>}/>
      <Route path="/signup" exact="true" element={<Register/>}/>
      <Route path="/cards/:userId" exact="true" element={<Cards/>}/>
      <Route path ="/crops/:userId" exact="true" element={<Crop/>}/>
      <Route path="/livestocks/:userId" exact="true" element={<Livestock/>}/>
      <Route path="/about" exact="true" element={<About/>}/>
      <Route path="/equipments/:userId" exact="true" element={<Equipment/>}/>
      <Route path="/finances/:userId" exact="true" element={<Finance/>}/>
     <Route path="*" element={<h1>404</h1>}/>
     </Routes>
    </>
  );
};

export default App;


