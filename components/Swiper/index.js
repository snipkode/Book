import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className=" swiper mySwiper"
      >
        <SwiperSlide>
            <div className="slider-unggulan">
                1
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider-unggulan">
                2
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider-unggulan">
                3
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider-unggulan">
                4
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider-unggulan">
                5
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider-unggulan">
                6
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
