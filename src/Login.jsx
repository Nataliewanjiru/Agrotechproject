import React, { useState, useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import './App.css'



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([])

    const navigate = useNavigate();


    useEffect(() => {
        fetch("https://agrotechbackend.onrender.com/users")
          .then((res) => res.json())
          .then((data) => setUsers(data))
      }, []);

 
      const signIn = (e) => {
        e.preventDefault();
        if(password){
          for (const user of users) {
            if (user.email === email) {
              console.log("Login successful");
              setEmail("");
              setPassword("");
              navigate(`/cards/${user.id}`)
              alert("Welcome back!") 
            }
          }
        }else{
          alert("User not found")
        }
        
      
        // If no match is found after looping through all users
        console.log("Login failed");
      };
      
      
      
      
  
    return (
      <div className="sign-in-parent">
        <div className="sign-in-container">
        <h1>Discover The Future of Food with AgroTech</h1>
        <p>We provide a platform where you can keep track of your farm including finances at any part of the country from your own comfort.Don't Be left out join and catch up from where you left it from</p>
        <form onSubmit={signIn}>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Log In</button>
        </form>
        <button><Link to="/signup">Don't have an account</Link></button>
    </div>
    </div>
    )
  }
  
  export default Login