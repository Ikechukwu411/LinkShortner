import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Paul from "../assets/ike.jpg";
import Chibuu from "../assets/chibuu.jpg";
import Franklin from "../assets/Franklin.jpg";

const ScrollSwiper = () => {
  return (
    <React.Fragment>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
        spaceBetween={50}
        slidesPerView={1}
        effect="creative"
        navigation
        virtual
        pagination={{ clickable: true }}
        style={{ width: "40%", padding: "1rem 4rem" }}
      >
        <SwiperSlide>
          <img src={Paul} alt="" style={{ width: "250px", height: "250px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Chibuu}
            alt=""
            style={{ width: "250px", height: "250px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Franklin}
            alt=""
            style={{ width: "250px", height: "250px" }}
          />
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
};

export default ScrollSwiper;
