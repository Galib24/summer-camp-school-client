import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/bannerr2.jpg'
import img2 from '../../../assets/bannerr3.jpg'
import img3 from '../../../assets/bannerr4.jpg'
import img4 from '../../../assets/bannerr5.jpg'
import img5 from '../../../assets/bannerr6.jpg'


const Banner = () => {
    return (
        <Carousel  className="w-3/4 mx-auto">
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
            </Carousel>
    );
};

export default Banner;