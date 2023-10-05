import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link> {/* New "Sign Up" Link */}
          </li>
          <li>
            <Link to="/booking">Services Booking</Link> {/* New "Services Booking" Link */}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
