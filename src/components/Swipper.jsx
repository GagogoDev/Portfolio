// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper';

export const Swipper = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className="text-center">React</SwiperSlide>
            <SwiperSlide className="text-center">Bootstrap</SwiperSlide>
            <SwiperSlide className="text-center">HTML</SwiperSlide>
            <SwiperSlide className="text-center">CSS</SwiperSlide>
            <SwiperSlide className="text-center">CodeIngniter</SwiperSlide>
            <SwiperSlide className="text-center">JQuery</SwiperSlide>
        </Swiper>
    );
};
