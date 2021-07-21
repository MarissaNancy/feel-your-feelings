import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';

function Dashboard () {
    return ( <div>
            <HeroSection />,
            <h1>Welcome Nancy and Lilly, how are you feeling Today?</h1>
            </div>
    )
}

export default Dashboard;


// onlick function, remove the hero section, show the card package with mood associated...