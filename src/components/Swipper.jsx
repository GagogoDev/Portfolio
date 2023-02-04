// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper';

// import data SwipperSlide
import { swipperSlides } from '../data/swipperSlides';

export const Swipper = () => {
    const breakpointsSwipper = {
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    };

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            breakpoints={breakpointsSwipper}
            modules={[Navigation, Pagination]}
            className="mySwiper"
        >
            {
                swipperSlides.map( ({id, name, srcImage, color }) => (
                    <SwiperSlide key={ id } className="text-center">
                        <img className="swiper-slide-img" src={srcImage} alt={name} />
                        <p className="swiper-slide-p" style={{ color: `${color}` }}>{name}</p>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};
