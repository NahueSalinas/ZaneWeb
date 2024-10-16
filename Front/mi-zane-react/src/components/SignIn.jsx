import axios from "axios";
import React, { useState } from "react";

const SignIn = ({onClose}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const [isPassword, setIsPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSignOn = async() =>{
        try{
            const response = await axios.get('http:localhost:8000/LoggedIn');
            setIsPassword(response.data.password);
            setIsEmail(response.data.email);
            if(email == isEmail && password == isPassword){
                alert("logged in successfully");
                setIsLoggedIn(true);
            }
        }
        catch(error){
         console.log(error);   
         alert("Problems encountered while logging in");
         setIsLoggedIn(false);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleSignOn();
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email: 
                            <input
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            /> 
                        </label>
                    </div>
                    <div>
                    <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Log in</button>
                    <button type="button" onClick={onClose}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;