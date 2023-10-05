
import About from './about';
import Livestock from './Livestocks'; 
import Crop from './Crop';
import './App.css'
import Login from './Login'
import Register from './Register'
import React from 'react';
import Navbar from './Navbar';
import Home from './Home'; 
import { Route, Routes } from 'react-router-dom';
import Cards from './Cards';


const App = () => {
  return (
    <>
      <Navbar />
     <Routes>
      <Route path="/" exact="true" element={<Home/>}/>
      <Route path="/login" exact="true" element={<Login/>}/>
      <Route path="/signup" exact="true" element={<Register/>}/>
      <Route path="/cards/:userId" exact="true" element={<Cards/>}/>
      <Route path ="/crops/:userId" exact="true" element={<Crop/>}/>
      <Route path="/livestocks/:userId" exact="true" element={<Livestock/>}/>
      <Route path="/about" exact="true" element={<About/>}/>
     </Routes>
     <div className="app">
    </div>
    </>
  );
};

export default App;



