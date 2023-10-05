import React from 'react';
import './App.css';
import About from './about';
import Livestock from './livestocks'; 
import Crop from './crop';


const App = () => {
  return (
    <div className="app">
      <Livestock />
      <Crop />
      < About />
    </div>
  );
}

export default App;
