import React from 'react';
import './About.css'
import rkreza from '../../img/rkreza.jpg'
import { Link, NavLink } from 'react-router-dom';
const About = () => {
    return (
        <div className="section-title">
            <h2>About</h2>
            <section class="about section mt-5" id="about-me" data-scroll-index="2">
                <div class="container w-75">
                    <div class="row justify-content-between">
                        <div class="col-md-6 about-tilt-img col-sm-12 col-lg-6" data-tilt data-tilt-max="10" data-tilt-speed="400" data-tilt-perspective="1000">
                            <div class="about-img-wrap">
                                <img src={rkreza} alt="About image" class="img-fluid about-img-thumb" />
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-lg-6 about-inner">
                            <h4>Hello, My Name Is Md Rezaul Karim<br />
                                Im <span>Web design & Developer</span></h4>
                            <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The point
                                of using Lorem Ipsum is that it has a more-or-less normal distribution
                                of letters, as opposed to using 'Content here, content here', making it
                                look like readable English.
                    </p>
                            <ul class="about-list">
                                <li>
                                    <span class="list-item-title">Name</span>
                                    <span class="list-item-value">Md Rezaul Karim</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Country</span>
                                    <span class="list-item-value">Bangladesh</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Age</span>
                                    <span class="list-item-value">28</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Email</span>
                                    <span class="list-item-value">rkreza2020@gmail.com</span>
                                </li>
                                <li>
                                    <span class="list-item-title">University</span>
                                    <span class="list-item-value">Dhaka International</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Phone</span>
                                    <span class="list-item-value">01632-020202</span>
                                </li>
                            </ul>
                            <div className="d-flex ms-3 justify-content-lg-around">
                                <a target='_black' href="https://drive.google.com/file/d/1lMk0Vo1g4oqpSyuprCrWzL00ue-UBOLe/view?usp=sharing" class="default-orange-btn">My Resume</a>
                                <button className="default-orange-btn">Contact Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;