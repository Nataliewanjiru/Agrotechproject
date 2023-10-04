import React from 'react';
import './App.css';
import Livestock from './livestocks'; 
import Crop from './crop';

const App = () => {
  return (
    <div className="app">
      <Livestock />
      <Crop />
    </div>
  );
}

export default App;
