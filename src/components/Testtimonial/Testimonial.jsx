import React from "react";

import patientAvatar from "../../assets/images/faq1.png";
import { HiStar } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required
import { Autoplay, Pagination } from "swiper";

const Testimonial = () => {
  return (
    <div className=" testimonial mt-[30px] lg:mt-[55px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        loopedSlides={true}
        autoplay={true}
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} width={35} height={35} className=" object-cover rounded-full"  alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Ashish Singh
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4  text-textColor font-[400]">
              <span className="  text-red-500 font-bold">“</span> <span className="text-blue-500 font-semibold  ">Speak India</span>  intuitive interface makes navigation a breeze, allowing me to focus on what truly matters: the exchange of ideas. From thought-provoking topics to engaging moderators, every aspect is meticulously designed to facilitate meaningful dialogue.<span className="  text-red-500 font-bold">”</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} width={35} height={35} className=" object-cover rounded-full"  alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                 Kavya Gupta
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4  text-textColor font-[400]">
              <span className="  text-red-500 font-bold">“</span> As an avid enthusiast of intellectual discourse, I've found my haven in <span className="text-blue-500 font-semibold  ">Speak India</span>. This platform isn't just about expressing opinions; it's a nurturing ground for cultivating critical thinking, empathy, and effective communication skills.<span className="  text-red-500 font-bold">”</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} width={35} height={35} className=" object-cover rounded-full"  alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Abhishek Mishra
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4  text-textColor font-[400]">
              <span className="  text-red-500 font-bold">“</span> As someone who values open dialogue and constructive discourse, <span className="text-blue-500 font-semibold  ">Speak India</span> has become my go-to destination. Whether I'm exploring contentious issues or delving into niche topics,  It's more than just a platform; it's a sanctuary for intellectual exploration.<span className="  text-red-500 font-bold">”</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} width={35} height={35} className=" object-cover rounded-full"  alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  KV Surendra
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4  text-textColor font-[400]">
              <span className="  text-red-500 font-bold">“</span> The structured debates offer a captivating arena where diverse perspectives clash, merge, and evolve. Every session feels like a journey, It's where I've discovered the power of respectful disagreement, where disagreements aren't seen as obstacles but as opportunities for growth.<span className="  text-red-500 font-bold">”</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} width={35} height={35} className=" object-cover rounded-full"  alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Anshu Singh
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4   text-textColor font-[400]">
              <span className="  text-red-500  font-bold">“</span> Joining <span className="text-blue-500 font-semibold  ">Speak India</span> has been a transformative experience for me.The platform's emphasis on evidence-based arguments and logical reasoning has elevated the quality of discourse, fostering an environment where intellectual rigor reigns supreme.<span className="  text-red-500 font-bold">”</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} width={35} height={35} className=" object-cover rounded-full"  alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Rajendra Divedi
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4  text-textColor font-[400]">
              <span className="  text-red-500 font-bold">“</span> <span className="text-blue-500 font-semibold  ">Speak India</span>  intuitive interface makes navigation a breeze, allowing me to focus on what truly matters: the exchange of ideas. From thought-provoking topics to engaging moderators, every aspect is meticulously designed to facilitate meaningful dialogue.<span className="  text-red-500  font-bold">”</span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
