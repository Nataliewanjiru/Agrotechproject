import React from 'react';
import Navbar from './Navbar';
import Home from './Home'; 

const App = () => {
  return (
    <div>
      <Navbar />
      <Home /> {/* Include the Home component */}
      {/* other app code */}
    </div>
  );
}

export default App;
