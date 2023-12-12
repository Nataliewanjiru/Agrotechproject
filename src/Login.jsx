import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
import Navbar from "./Navbar";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      if (email && username && password) {
        // Perform your authentication logic here...
        const response = await axios.post("https://agrotechbackend.onrender.com/userlogin", {
          email,
          username,
          password
        });

        // Process the response as needed
        const userData = response.data;
        const { userid } = userData;

        // Store user information in localStorage
        localStorage.setItem('token', userData.access_token);
        localStorage.setItem('name', username);
        localStorage.setItem('userID', userid);

        const farmsResponse = await axios.get("https://agrotechbackend.onrender.com/farms");
        const farmsData = farmsResponse.data;

        // Find the farm associated with the logged-in user (assuming farmer_id is user_id)
        const userFarm = farmsData.find(farm => farm.farmer_id === userid);

        if (userFarm) {
          // Store the farm ID associated with the logged-in user in localStorage
          localStorage.setItem('farmID', userFarm.id);
        }

        // Clear form fields after successful login
        setEmail("");
        setUsername("");
        setPassword("");

        // Trigger the login callback
        onLogin();

        swal({
          title: 'Success',
          text: 'Logged in successfully',
          icon: 'success',
        });

        // Navigate to the desired page after successful login
        navigate("/");
      } else {
        swal({
          title: 'Error',
          text: 'Please fill in all the inputs',
          icon: 'error',
        });
      }
    } catch (error) {
      alert("User not found");
      console.error(error);
    }
  };

  return (
    <div className="signInBody">
      <Navbar />
      <div className="sign-in-parent">
        <div className="sign-in-container">
          <h1>Log In</h1>
          <p>Don't be left out, join and catch up from where you left off. Please fill in all the inputs.</p>
          <form onSubmit={signIn}>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Log In</button>
          </form>
          <button><Link to="/signup">Don't have an account</Link></button>
        </div>
        <img src="" alt="Login Image" />
      </div>
    </div>
  );
}

export default Login;
