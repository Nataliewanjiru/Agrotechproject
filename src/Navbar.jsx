import React from "react";
import { Link, useLocation  } from "react-router-dom";



const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar-parent">
      <div className="top-navbar">
      <nav>
        <ul>
          <li>
            <Link> En</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link> 
          </li>
        </ul>
      </nav>
      </div>
      <div className="bottom-navbar">
        <nav>
          <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Crops</Link>
          </li>
          <li>
            <Link to="/livestocks">Livestock</Link> 
          </li>
          <li>
            <Link to="/advisor">Equipment</Link> 
          </li>
          <li>
            <Link to="/advisor">Finance</Link>
          </li>
          <li>
            <Link to="/advisor">Advisors</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
