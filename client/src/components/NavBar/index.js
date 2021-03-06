import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "../NavBar/style.css";
import { Button } from '../Button/index';


function Navbar({login, toggle}) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        FeelYourFeelings <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li> */}
                    {!login ? (
                        <li className="nav-item">
                        <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                    ) : (
                         <Link to="/" className="nav-links" onClick={toggle}>
                        Logout
                    </Link>
                    )}
                    
                </ul>
                
            </nav>
        </>
    );
}

export default Navbar;
