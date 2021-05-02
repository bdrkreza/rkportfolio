import React from 'react';
import "./HeroSection.css"
import Typical from 'react-typical'
import logo from '../../../img/rkreza.jpg'

const HeroSection = () => {
    return (
        <section class="hero-banner" data-scroll-index="1">
            <div class="container w-75">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-12 col-sm-12">
                        <div class="hero-inner">
                            <div class="hero-social">
                                <a href="https://www.facebook.com/animation.coding.html"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://dribbble.com/animationbro.html"><i class="fab fa-dribbble"></i></a>
                                <a href="https://www.youtube.com/animationcoding"><i class="fab fa-youtube"></i></a>
                            </div>

                            <div className="d-flex">
                                <h1>I'm</h1>
                                <Typical
                                    loop={Infinity}
                                    className='h2 mt-4 ms-2 text-info'
                                    steps={[
                                        'Designer',
                                        2000,
                                        'Developer',
                                        2000,
                                        'Freelancer',
                                        2000
                                    ]}
                                />
                            </div>

                            <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p>
                            <a href="#" class="default-orange-btn">Hire Me <i class="ml-2 fas fa-thumbs-up"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-5 banner-profile-img" data-tilt data-tilt-max="10" data-tilt-speed="400" data-tilt-perspective="1000">
                        <img src={logo} alt="Hero Image" class="img-fluid hero-img" />
                    </div>
                </div>
            </div>
            <div class="button-group-center wow zoomIn" data-wow-delay="0.4s">
                <a href="#" class="scroll-down-btn" data-scroll-nav="2">
                    <i class="fas fa-angle-double-down"></i>
                </a>
                <a href="/" class="popup-youtube my-video-btn">
                    <span class="fa fa-play"></span>
                </a>
            </div>
        </section >
    );
};

export default HeroSection;