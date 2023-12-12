
import Equipment from './Components/Equipments';
import Advisor from './advisor';
import Livestock from './Livestocks'; 
import Crop from './Crop';
import './App.css'
import Login from './Login'
import Register from './Register'
import Navbar from './Navbar';
import Home from './Home'; 
import { Route, Routes,Navigate } from 'react-router-dom';
import Cards from './Cards';
import Finance from './Components/Finance'
import AboutUs from './about';
import { useState,useEffect } from 'react';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated by reading from localStorage
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    const joinedStatus = localStorage.getItem("joined");

    if (storedAuthStatus === 'true') {
      setIsAuthenticated(true);
    }

    if (joinedStatus === 'true') {
      setJoined(true);
    }
  }, []);

  const changeJoin = () => {
    setJoined(true);
    localStorage.setItem('joined', 'true');
  };

  const changeJoinOut = () => {
    setJoined(false);
    localStorage.removeItem('joined');
  };

  const handleLogin = () => {
    // Simulate a successful login
    setIsAuthenticated(true);
    // Store the authentication status in localStorage
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    // Simulate a logout
    setIsAuthenticated(false);
    // Clear the authentication status from localStorage
    localStorage.removeItem('isAuthenticated');
  };
   
  return(
    <>
     <Routes>
      <Route path="/" exact="true" element={<Home/>}/>
      <Route path="/login" exact="true" element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}/>
      <Route path="/signup" exact="true" element={<Register/>}/>
      <Route path="/cards/:userId" exact="true" element={<Cards/>}/>
      <Route path ="/crops" exact="true"element={isAuthenticated ? <Crop /> : <Navigate to="/login" />}/>
      <Route path="/livestocks" exact="true" element={ isAuthenticated ? <Livestock /> : <Navigate to="/login" />}/>
      <Route path="/about" exact="true" element={<AboutUs/>}/>
      <Route path="/equipments/:userId" exact="true" element={<Equipment/>}/>
      <Route path="/finances/:userId" exact="true" element={isAuthenticated ? <Finance /> : <Navigate to="/login" />}/>
      <Route path="/advisor" exact="true" element={isAuthenticated ? <Advisor /> : <Navigate to="/login" />}/>
     <Route path="*" element={<h1>404</h1>}/>
     </Routes>
    </>
  );
};

export default App;


