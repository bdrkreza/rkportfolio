import React from 'react';
import './Header.css'
import HeroSection from '../HeroSection/HeroSection';


const Header = () => {
    return (
        <div>
            <div id="stripes">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <HeroSection />
        </div>
    );
};

export default Header;