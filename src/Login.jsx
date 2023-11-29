import React, { useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
import Navbar from "./Navbar";




function Login({onLogin}) {
    const [data,setData]= useState({
      email: "",
      username:"",
      password: ""
    })

    const { email,username,password } = data;

    let navigate = useNavigate();
 
      const signIn = async (e) => {
        e.preventDefault();
        
        try {
          if(email,username,password){
          const response = await axios.post("http://127.0.0.1:5909/userlogin",data);
          setData({
            email: "",
            username:"",
            password: ""
           })
           onLogin()
            swal({
              title: 'Success',
              text: 'Logged in successfully',
              icon: 'success',
            });
            navigate("/")
            let res = response.data.access_token
         localStorage.setItem('token', res ); // Store the token in localStorage
         localStorage.setItem("name", username)
         localStorage.setItem("userID",response.data.userid )
          }else{
            swal({
              title: 'Error',
              text: 'Please fill in all the inputs',
              icon: 'error',
            });
          }
        } catch (error) {
          alert("User not found")
         console.error(error);
        } 
      };
      
  
    return (
      <div className="signInBody">
      <Navbar/>
      <div className="sign-in-parent">
        <div className="sign-in-container">
        <h1 >Log In</h1>
        <p>Don't Be left out join and catch up from where you left it from.Please fill in all the inputs</p>
        <form onSubmit={signIn}>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setData({...data, email: e.target.value})}></input>
            <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setData({...data, username:e.target.value})}></input>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setData({...data, password:e.target.value})}></input>
            <button type="submit">Log In</button>
        </form>
        <button><Link to="/signup">Don't have an account</Link></button>
    </div>
    <img src=""/>
    </div>
    </div>
    )
  }
  
  export default Login