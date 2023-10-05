import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Finance from './Finance'; 

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Finance /> {/* Include the Finance component */}
      {/* other app code */}
    </div>
  );
}

export default App;
