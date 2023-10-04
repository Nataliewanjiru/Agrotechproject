import React, { useState } from "react";

const Register = ({ changeForm }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setfirstName]= useState("")
    const[lastname, setlastName] = useState("")
    const[role, setRole] = useState("")

    const signUp = (e) => {
        e.preventDefault();

        setEmail("")
        setPassword("")
        setfirstName("")
        setlastName("")
        setRole("")
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input type="text" placeholder="Enter your first name.." value={firstname} onChange={(e) => setfirstName(e.target.value)} ></input>
                <input type="text" placeholder="Enter your last name.." value={lastname} onChange={(e) => setlastName(e.target.value)} ></input>
                <input type="email" placeholder="Enter your email.." value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                <input type="password" placeholder="Enter your password" value={password}onChange={(e) => setPassword(e.target.value)}></input>
                <input type="text" placeholder="Enter your role (Advisor/Farmer)" value={role} onChange={(e) => setRole(e.target.value)} ></input>
                <button type="submit">Sign Up</button>
            </form>
            <button onClick={() => changeForm("login")}>Already have an account.</button>
        </div>
    );
};

export default Register;