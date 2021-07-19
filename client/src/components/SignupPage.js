import React, { useState } from "react";
import "./SignupPage.css";
import { Button } from './Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignupPage = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    
const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + name);
    console.log("email is " + email);
    console.log("password is " + password);
    console.log("password2 is " + password2);

};

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <label className="signup-label">
                <h1>Name:</h1>
                <input 
                className="name-field" 
                type="text" 
                name="name"
                placeholder="username"
                onChange={e => setName(e.target.value)} />
                <h1>Email:</h1>
                <input 
                className="email-field" 
                type="text" 
                name="email"
                placeholder="email"
                onChange={ e => setEmail(e.target.value)} />
                <h1>Password:</h1>
                <input 
                className="password-field" 
                type="text" 
                name="password"
                placeholder="password"
                onchange={ e => setPassword(e.target.value)} />
                <h1>Confirm Password:</h1>
                <input 
                className="password-field" 
                type="text" 
                name="password2"
                placeholder="confirm password"
                onchange={ e => setPassword2(e.target.value)} />
                <Button className="signup-btn" type="submit" buttonStyle="signup--btn" buttonSize="btn--large">Sign Up</Button>
            </label>
        </form>
    )
};


export default SignupPage
