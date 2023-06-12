import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";


const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://summer-camp-fitness-school-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading='Our proud clients Reviews'
                heading='Reviews'
            >

            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <img style={{ borderRadius: '50px 50px 50px 50px', width: '120px' }} src={review.img} alt="" />
                            <h3 className="text-2xl text-green-500 py-8">{review.name}</h3>
                            <p>{review.details}</p>
                        </div>


                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Reviews;