import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import ImageDefault from './images/default.png';
import Card from "../Books/card";
import "swiper/css";
import "swiper/css/pagination";

export default function SwiperProduct(props) {
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
        {
          props?.data?.map((value, key) => (
            <SwiperSlide key={key}>
              <Card key={key}
                title={value.title}
                author={value.author}
                thumb={value.thumb ?`images/${value.thumb}` : ImageDefault}
                path={`/books/preview/${value.bookId}`}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

