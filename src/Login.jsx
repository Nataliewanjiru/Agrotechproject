import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";




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
        <div className="sign-in-container">
        <form onSubmit={signIn}>
            <h1>Log In to your Account</h1>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Log In</button>
        </form>
        <button><Link to="/signup">Don't have an account</Link></button>

    </div>
    )
  }
  
  export default Login