import React from 'react';
import { Button } from './Button';
import "./HeroSection.css";
import "../App.css";
import { Link } from 'react-router-dom';


function HeroSection() {
    return (
        <div className="hero-container">
            <div className="lower-section">
            <h1>Welcome Alejandro, Henry, Nancy and Lilly, how are you feeling Today?</h1>
            <div className="hero-btns">
                <Link to='/moods/happy' className="btn-mobile">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Happy</Button>
                </Link>
                <Link to='/moods/moody' className="btn-mobile">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Moody</Button>
                </Link>
                <Link to='/moods/tired' className="btn-mobile">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Tired</Button>
                </Link>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Grumpy</Button>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Nostalgic</Button>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Romantic</Button>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Fun</Button>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Active</Button>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Motivated</Button>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Lazy</Button>
            </div>
            </div>
        </div>
    )
}

export default HeroSection
