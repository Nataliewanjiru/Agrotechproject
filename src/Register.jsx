import React, { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";





const Register = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        role: "",
    });

    const { first_name, last_name, email, password, role } = formData;

   


    const signUp = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await axios.post("https://agrotechbackend.onrender.com/register", formData);
            console.log(response.data); // Handle the response from the backend
        } catch (error) {
            console.error(error);
        }

        // Clear the form inputs after submission
        setFormData({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            role: "",
        });
        navigate(`/cards/${user.id}`)
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input
                    type="text"
                    placeholder="Enter your first name.."
                    value={first_name}
                    onChange={(e) =>
                        setFormData({ ...formData, first_name: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Enter your last name.."
                    value={last_name}
                    onChange={(e) =>
                        setFormData({ ...formData, last_name: e.target.value })
                    }
                />
                <input
                    type="email"
                    placeholder="Enter your email.."
                    value={email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Enter your role (Advisor/Farmer)"
                    value={role}
                    onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                    }
                />
                <button type="submit">Sign Up</button>
            </form>
            <button><Link to="/login">Already have an account</Link></button>
        </div>
    );
};

export default Register;