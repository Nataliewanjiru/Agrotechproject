import React, { useState } from 'react';
// import Finance from './Components/Finance';
import './App.css';
import Equipment from './Components/Equipments';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Equipment Data</h1>
        {/* <Finance /> */}
        {<Equipment />}
      </header>
    </div >
  );
}

export default App;
