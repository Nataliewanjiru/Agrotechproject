import React, { useState, useEffect } from 'react';
import  './advisor.css';

function Advisor() {
  const [advisors, setAdvisors] = useState([]);

  useEffect(() => {
    fetch('https://agrotechbackend.onrender.com/advisors')
      .then(response => response.json())
      .then(data => setAdvisors(data))
  }, []);

  return (
    <div className='advisors'>
      <h1>Meet Our Expert Advisors</h1>
      <p>Our course is backed by a team of experienced advisors who bring a wealth of knowledge and expertise to guide you on your journey. Get to know them through our platform feel free to consult from the best there is in the Agriculture field.These are the advisors for this course</p>
      <ul>
        {advisors.map(advisor => (
          <li key={advisor.id}>
            <p>Username: {advisor.name}</p>
            <p>Specialization: {advisor.field}</p>
            <p>Phone Number: {advisor.phone}</p>
            <p>Location: {advisor.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Advisor;
