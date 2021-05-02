
import './portfolioCard.css'
import tribaRider from '../../../../img/tribarider.png'
import YomitBuy from '../../../../img/YomitBuy.png'
import redsecurity from '../../../../img/redsecurity.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"


// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const PortfolioCard = () => {

    return (
        <div>
            <div class="mySwiper">
                <div class="swiper-wrapper d-flex justify-content-evenly">
                    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                        "rotate": 20,
                        "stretch": 0,
                        "depth": 200,
                        "modifier": 1,
                        "slideShadows": true
                    }} pagination={true} className="mySwiper">
                        <SwiperSlide >
                            <img src={tribaRider} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={YomitBuy} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src={redsecurity} />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                        </SwiperSlide>
                    </Swiper>

                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    );
};

export default PortfolioCard;