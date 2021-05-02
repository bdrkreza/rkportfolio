import React from 'react';
import './Skill.css'
const Skill = () => {
    return (
        <div className="section-title">
            <h2>Skills</h2>
            <section class="section mt-5">
                <div class="wall">
                    <div class="v-boxes">
                        <div class="box">
                            <span class="tooltip">CSS</span>
                            <div class="box-face">
                                <div class="box-text"><i class="fab fa-css3-alt"></i></div>
                            </div>
                            <div class="box-back">
                                <div class="box-text">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <span class="tooltip">JavaScript</span>
                            <div class="box-face">
                                <div class="box-text"><i class="fab fa-js-square"></i></div>
                            </div>
                            <div class="box-back">
                                <div class="box-text">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <span class="tooltip">Bulma</span>
                            <div class="box-face">
                                <div class="box-text">
                                    <img src="https://bulma.io/favicons/favicon-32x32.png?v=201701041855" alt="" />
                                </div>
                            </div>
                            <div class="box-back">
                                <div class="box-text">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <span class="tooltip">Vue</span>
                            <div class="box-face">
                                <div class="box-text"><i class="fab fa-vuejs"></i></div>
                            </div>
                            <div class="box-back">
                                <div class="box-text">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="v-boxes second">
                        <div class="box">
                            <span class="tooltip">PHP</span>
                            <div class="box-face">
                                <div class="box-text"><i class="fab fa-php"></i></div>
                            </div>
                            <div class="box-back">
                                <div class="box-text">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <span class="tooltip">Laravel</span>
                            <div class="box-face">
                                <div class="box-text"><i class="fab fa-laravel"></i></div>
                            </div>
                            <div class="box-back">
                                <div class="box-text">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <span class="tooltip">NodeJs</span>
                            <div class="box-face">
                                <div class="box-text"><i class="fab fa-node-js"></i></div>
                            </div>
                            <div class="box-back">
                                <div class="box-text">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="v-boxes third">
                        <div class="box">
                            <span class="tooltip">Electron</span>
                            <div class="box-face">
                                <div class="box-text">
                                    <img src="https://electronjs.org/images/favicon.ico" alt="" />
                                </div>
                            </div>
                            <div class="box-back">
                                <div class="box-text">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <span class="tooltip">VueNative</span>
                            <div class="box-face">
                                <div class="box-text"><img src="https://vue-native.io/images/logo.png" alt="" /></div>
                            </div>
                            <div class="box-back">
                                <div class="box-text">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="v-boxes forth">
                        <div class="box link">
                            <div class="box-face">
                                <div class="box-text"><i class="fab fa-github-alt"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skill;