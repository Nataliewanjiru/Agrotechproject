import React from 'react';
import './App.css';
import About from './about';
import Livestock from './livestocks'; 
import Crop from './crop';
import Advisor from './advisor';


const App = () => {
  return (
    <div className="app">
      <Livestock />
      <Crop />
      < About />
      <Advisor />
    </div>
  );
}

export default App;
