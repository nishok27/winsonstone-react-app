import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation buttons
import "swiper/css/pagination"; // Pagination styles

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "../Home/Slide.css"; // Custom styles
import slide1 from "../../assets/Slider/slide1.png"
import slide2 from "../../assets/Slider/slide2.png"
import slide3 from "../../assets/Slider/slide3.png"

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            src={slide3}
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide1}
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt="Slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
