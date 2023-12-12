import React, { useState, useEffect } from 'react';
import  './advisor.css';
import Navbar from './Navbar';


function Advisor() {
  const [advisors, setAdvisors] = useState([]);

  useEffect(() => {
    fetch('https://agrotechbackend.onrender.com/advisors')
      .then(response => response.json())
      .then(data => setAdvisors(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='advisorsParent'>
    <Navbar/>
    <div className='advisors'>
    <div className="box"></div>
      <h1>Coming Soon...</h1>
    </div>
    </div>
  );
}

export default Advisor;
