import React, { useState, useEffect } from 'react'
import "../LoginPage/style.css";
import { Button } from '../Button/index';
import API from '../../utils/API';
import { useHistory } from "react-router-dom";



function LoginPage({toggle}) {
    const [login, setLogin] = useState({})
    const [signup, setSignup] = useState({})

    let history = useHistory();

useEffect(() => {
    console.log(login)
    console.log(signup)
},[login, signup])

function handleLoginInputChange(event){
    const { name, value } = event.target;
    setLogin({...login, [name]: value})

}

function handleSignupInputChange(event){
    const { name, value } = event.target;
    setSignup({...signup, [name]: value})
    
}

function handleLoginFormSubmit(event){
     event.preventDefault();
    API.login(login)
    .then(res => {
        toggle ()
        console.log(res)
        history.push("/dashboard");
    })
    
}

function handleSignupFormSubmit(event){
    event.preventDefault();
    API.signup(signup)
    .then(res => {
        toggle ()
        console.log(res)
        history.push("/dashboard");
    })
}
    return (
        <form className="login-form">
            <label className="login-label">
                
                <input className="email-field" type="text" name="email"  placeholder="Email" onChange={handleLoginInputChange} />
                
                <input className="password-field" type="text" name="password" placeholder="Password" onChange={handleLoginInputChange} />
                <Button className="login-btn" buttonStyle="login--btn" buttonSize="btn--large" onClick={handleLoginFormSubmit}>Login</Button>
                {/* <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link> */}
            </label>
            <image className="logo"></image>
            <label className="signup-label">
            
                <input
                    className="name-field"
                    type="text"
                    name="name"
                    placeholder="Name" 
                    onChange={handleSignupInputChange} />
                
                <input
                    className="email-field"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleSignupInputChange} />
        
                <input
                    className="password-field"
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={handleSignupInputChange} />
           
                <input
                    className="password-field"
                    type="text"
                    name="password2"
                    placeholder="Confirm Password" 
                    onChange={handleSignupInputChange} />
                <Button className="signup-btn" type="submit" buttonStyle="signup--btn" buttonSize="btn--large" onClick={handleSignupFormSubmit}>Sign Up</Button>
            </label>
        </form>
    )
}
export default LoginPage