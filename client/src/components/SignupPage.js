import React, { useState } from "react";
import "./SignupPage.css";
import { Button } from './Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SignupPage() {
    
    return (
        <form className="signup-form">
            <label className="signup-label">
                <h1>Name:</h1>
                <input className="name-field" type="text" name="name" />
                <h1>Email:</h1>
                <input className="email-field" type="text" name="email" />
                <h1>Password:</h1>
                <input className="password-field" type="text" name="password" />
                <h1>Date of Birth</h1>
                <Button className="signup-btn" buttonStyle="signup--btn" buttonSize="btn--large">Sign Up</Button>
            </label>
        </form>
    )
}

export default SignupPage
