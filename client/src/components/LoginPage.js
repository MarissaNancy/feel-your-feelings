import React from 'react'
import "./LoginPage.css";
import { Button } from './Button';

function LoginPage() {
    return (
        <form className="login-form">
            <label className="login-label">
                <h1>Email:</h1>
                <input className="email-field" type="text" name="email" />
                <h1>Password:</h1>
                <input className="password-field" type="text" name="password" />
                <Button className="login-btn" buttonStyle="login--btn" buttonSize="btn--large">Login</Button>
                {/* <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link> */}
            </label>
        </form>
    )
}

export default LoginPage
