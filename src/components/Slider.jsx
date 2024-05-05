import React from "react";

import patientAvatar from "../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required
import { Autoplay, Pagination } from "swiper";
import HotTopicCard from "./cards/HotTopicCard";
import HostCard from "./cards/HostCard";

const Slider = ({ sliderData,role="event" }) => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loopedSlides={true}
        autoplay={true}
        pagination={{ clickable: true }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,

          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        {sliderData.map((topic) => (
         ( <SwiperSlide>
           {role==="event" ?<HotTopicCard topicData={topic} />:<HostCard  hostData={topic}  />}
          </SwiperSlide>)
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
