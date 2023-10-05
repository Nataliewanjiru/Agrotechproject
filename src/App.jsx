
import About from './about';
import Livestock from './livestocks'; 
import Crop from './crop';
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
     <div className="app">
      <Livestock />
      <Crop />
      < About />
    </div>
    </>
  );
};

export default App;



