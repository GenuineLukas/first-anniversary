import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// import swper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import Logo from "../../assets/logo.png";
import { wordsData } from "../../data/realProducts";

const Slider = (props) => {
  return (
    <div>
      <div className="firstLine">
        <img src={Logo} alt="" />
        <h1>Messages from People</h1>
        <img src={Logo} alt="" />
      </div>
      <div className="s-container">
        <Swiper
          modules={[Pagination, Navigation]}
          className="mySwiper"
          navigation={true}
          loopFillGroupWithBlank={true}
          slidesPerView={props.itemCount}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}
          height="400px"
        >
          {wordsData.map((slide, i) => (
            <SwiperSlide>
              <div className="left-s">
                <div className="name">
                  <span>{slide.name}</span>
                  <span>{slide.content}</span>
                </div>
                <span>{slide.type}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
