import React from 'react';
import About from '../About/About';
import ContactUs from '../Body/ContactUs/ContactUs';
import MyService from '../Body/MyService/MyService/MyService';
import Portfolio from '../Body/Portfolio/Portfolio/Portfolio';
import Testimonial from '../Body/Testimonial/Testimonial/Testimonial';
import Header from '../Header/Header/Header';
import Skill from '../Skill/Skill';


const Home = () => {
    return (
        <div>
            <div id="page-up-button">
                <div id="button-text">top</div>
            </div>
            <Header />
            <About />
            <Skill />
            <MyService />
            <Portfolio />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default Home;