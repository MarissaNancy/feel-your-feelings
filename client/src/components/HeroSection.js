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
                <Link to='/moods/grumpy' className="btn-mobile">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Grumpy</Button>
                </Link>
                <Link to='/moods/nostalgic' className="btn-mobile">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Nostalgic</Button>
                </Link>
                <Link to='/moods/romantic' className="btn-mobile">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Romantic</Button>
                </Link>
                <Link to='/moods/fun' className="btn-mobile">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Fun</Button>
                </Link>
                <Link to='/moods/active' className="btn-mobile">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Active</Button>
                </Link>
                <Link to='/moods/motivated' className="btn-mobile">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Motivated</Button>
                </Link>
                <Link to='/moods/lazy' className="btn-mobile">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Lazy</Button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default HeroSection
