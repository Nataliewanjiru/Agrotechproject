
import { useState } from 'react'
import './App.css'
import Login from './Login'
import Register from './Register'
import React from 'react';
import Navbar from './Navbar';
import Home from './Home'; 


const App = () => {
  const [count, setCount] = useState(0)
  return (

    <>
    <Register/>
    <Login/>
    <Navbar />
    <Home /> {/* Include the Home component */}
    </>
  )
}

export default App;
