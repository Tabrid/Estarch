/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import './styles.css'
import img1 from "../../assets/images/banner1.jpeg";
import img2 from "../../assets/images/banner2.jpeg";
import img3 from "../../assets/images/banner3.jpeg";



function HeaderBanner() {
  return (
    <div className="max-h-[600px]">
      <div className="relative">
        <Swiper
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="w-[20px] ">
            <img className="overflow-hidden md:max-h-[600px]" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px] ">
            <img className="overflow-hidden md:max-h-[600px]" src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-[20px] ">
            <img className="overflow-hidden md:max-h-[600px]" src={img3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HeaderBanner;
