import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/swp1.jpg'
import slide2 from '../../../assets/swp1up.png'
import slide3 from '../../../assets/swp3.jpg'
import slide4 from '../../../assets/swp4.jpg'

const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-white">legs Exercise</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-black">Side Twist</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-white">PushUp</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h3 className="text-4xl uppercase text-center -mt-16 text-black">PushUp With Front</h3>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;