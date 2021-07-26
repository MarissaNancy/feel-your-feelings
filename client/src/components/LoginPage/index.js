import React from 'react'
import "../LoginPage/style.css";
import { Button } from '../Button/index';




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

            <image className="logo"></image>

            <label className="signup-label">
                <h1>Name:</h1>
                <input
                    className="name-field"
                    type="text"
                    name="name"
                    placeholder="username" />
                <h1>Email:</h1>
                <input
                    className="email-field"
                    type="text"
                    name="email"
                    placeholder="email" />
                <h1>Password:</h1>
                <input
                    className="password-field"
                    type="text"
                    name="password"
                    placeholder="password" />
                <h1>Confirm Password:</h1>
                <input
                    className="password-field"
                    type="text"
                    name="password2"
                    placeholder="confirm password" />
                <Button className="signup-btn" type="submit" buttonStyle="signup--btn" buttonSize="btn--large">Sign Up</Button>

            </label>

        </form>
    )
}

export default LoginPage
