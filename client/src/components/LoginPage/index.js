import React, { useState, useEffect } from 'react'
import "../LoginPage/style.css";
import { Button } from '../Button/index';
import API from '../../utils/API';
import { useHistory } from "react-router-dom";
function LoginPage() {
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
        console.log(res)
        history.push("/dashboard");
    })
}
function handleSignupFormSubmit(event){
    event.preventDefault();
    API.signup(signup)
    .then(res => {
        console.log(res)
        history.push("/dashboard");
    })
}
    return (
        <form className="login-form">
            <label className="login-label">
                <h1>Email:</h1>
                <input className="email-field" type="text" name="email" onChange={handleLoginInputChange} />
                <h1>Password:</h1>
                <input className="password-field" type="text" name="password" onChange={handleLoginInputChange} />
                <Button className="login-btn" buttonStyle="login--btn" buttonSize="btn--large" onClick={handleLoginFormSubmit}>Login</Button>
                {/* <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link> */}
            </label>
            <image className="logo"></image>
            <label className="signup-label">
                <h1>Name:</h1>
                <input
                    className="name-field"
                    type="text"
                    name="name"
                    placeholder="username" 
                    onChange={handleSignupInputChange} />
                <h1>Email:</h1>
                <input
                    className="email-field"
                    type="text"
                    name="email"
                    placeholder="email" 
                    onChange={handleSignupInputChange} />
                <h1>Password:</h1>
                <input
                    className="password-field"
                    type="text"
                    name="password"
                    placeholder="password" 
                    onChange={handleSignupInputChange} />
                <h1>Confirm Password:</h1>
                <input
                    className="password-field"
                    type="text"
                    name="password2"
                    placeholder="confirm password" 
                    onChange={handleSignupInputChange} />
                <Button className="signup-btn" type="submit" buttonStyle="signup--btn" buttonSize="btn--large" onClick={handleSignupFormSubmit}>Sign Up</Button>
            </label>
        </form>
    )
}
export default LoginPage