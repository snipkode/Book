import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import Image1 from './images/berkunjung.png';
import Image2 from './images/bagaimana.png';
import Image3 from './images/laut.png';
import Image4 from './images/antologi.png';
import Image5 from './images/nelayan.png';
import Image6 from './images/narkoba.png';
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" swiper mySwiper"
      >
        <SwiperSlide>
          <div className="slider-unggulan">
            <Image className="image-rounded" alt="thumb-image" src={Image1} layout="intrinsic" objectFit="cover" width={300} height={410} />
            <div className="info">
              <div className="title-book">Berkunjung Ke Taman Buah</div>
              <div className="author-book">
                <small>Bimo Sakti</small>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-unggulan">
            <Image className="image-rounded" alt="thumb-image" src={Image2} layout="intrinsic" objectFit="cover" width={300} height={410} />
            <div className="info">
              <div className="title-book">Bagaimana Manusia Dapat Hidup Bahagia Lahir Batin</div>
              <div className="author-book">
                <small>S. Kusumopradoto</small>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-unggulan">
            <Image className="image-rounded" alt="thumb-image" src={Image3} layout="intrinsic" objectFit="cover" width={300} height={410} />
            <div className="info">
              <div className="title-book">Ayo Tengok Lautku</div>
              <div className="author-book">
                <small>Rahmawati, SH.</small>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-unggulan">
            <Image className="image-rounded" alt="thumb-image" src={Image4} layout="intrinsic" objectFit="cover" width={300} height={410} />
            <div className="info">
              <div className="title-book">Antologi Studi Agama dan Pendidikan</div>
              <div className="author-book">
                <small>Prof. H. Abdurrahman Mas'ud, Ph.D.</small>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-unggulan">
            <Image className="image-rounded" alt="thumb-image" src={Image5} layout="intrinsic" objectFit="cover" width={300} height={410} />
            <div className="info">
              <div className="title-book">Aku Ingin Menjadi Nelayan Kaya</div>
              <div className="author-book">
                <small>Rahadiyanti Aditya</small>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-unggulan">
            <Image className="image-rounded" alt="thumb-image" src={Image6} layout="intrinsic" objectFit="cover" width={300} height={410} />
            <div className="info">
              <div className="title-book">Ada Apa Dengan Narkoba</div>
              <div className="author-book">
                <small>Winarto, S.S.</small>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
