import React from 'react';
import { Button } from './Button';
import "./HeroSection.css";
import "../App.css";


function HeroSection() {
    return (
        <div className="col-lg-12 hero-container">
            <div className="row col-md-12 lower-section">
            <h1>How are you feeling today?</h1>
            <div className="col-12 hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Happy</Button>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Moody</Button>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Tired</Button>
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
