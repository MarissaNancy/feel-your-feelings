import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const STYLES = ["btn--primary", "btn--outline", "login--btn", "signup--btn", "mood--btn", "remove--btn", "favorite--btn", "back--btn"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick} 
            type={type}
            >
                {children}
            </button>
    )
};