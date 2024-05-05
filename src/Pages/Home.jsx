import React, { useContext, useEffect, useState } from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import home1 from "../assets/images/home1.jpg";
import home2 from "../assets/images/home2.jpg";
import home3 from "../assets/images/home3.jpg";
import home4 from "../assets/images/home4.jpg";
import home5 from "../assets/images/home5.jpg";
import home6 from "../assets/images/home6.jpg";
import home7 from "../assets/images/home7.jpg";
import home8 from "../assets/images/home8.png";
import home10 from "../assets/images/home10.png";
import home11 from "../assets/images/home11.png";
import home9 from "../assets/images/home9.jpg";
import home12 from "../assets/images/home12.png";
import whyus from "../assets/images/whyus.png";
import gd from "../assets/images/gd.jpg";
import debate from "../assets/images/debate.jpg";
import exoertTalk from "../assets/images/expertTalk.jpg";

import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faq1 from "../assets/images/faq1.png";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/service/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/faq/FaqList";
import Testimonial from "../components/Testtimonial/Testimonial";
import EventCard from "../components/cards/EventCard";
import Servicecard from "../components/cards/Servicecard";
import HotTopicCard from "../components/cards/HotTopicCard";
import HostCard from "../components/cards/HostCard";
import useFetchData from "../hooks/useFetchData";
import { authContext } from "../context/AuthContext";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";

const text = [
  "Embark on intellectual journeys and sharpen your argumentative prowess with our Debate Services.oin a vibrant community of debaters committed to exploring diverse viewpoints and honing their rhetorical skills.",
  "Facilitate collaboration, deepen understanding, and cultivate consensus with our Group Discussion Services. Explore complex issues, share insights, and forge connections with like-minded individuals.",
  "Gain  insights from industry leaders, subject matter experts, and thought leaders with our Expert Talk Services.  Expand your horizons with curated talks and discussions by experts in their fields.",
];

const Home = () => {
  const { user, token, role } = useContext(authContext);

  const [loadingTodayEvents, setLoadingTodayEvents] = useState(false);
  const [loadingUpcomingEvents, setLoadingUpcomingEvents] = useState(false);

  const [todaysEventsData, setTodaysEventsData] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]); 
  // console.log("ENV is : ", import.meta.env.VITE_BASE_URL)

  // Fetching all hosts
  const {
    loading,
    error,
    data: hostData,
  } = useFetchData(`${import.meta.env.VITE_BASE_URL}/api/v1/host/getAll`);
  console.log(hostData);

  // Fetching All Topics

  // Fetching all todays Events
  const getAllTodaysEvents = async () => {
    setLoadingTodayEvents(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/events/getByStatus`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: "today" }),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      // dispatch({
      //   type:"LOGIN_SUCCESS",
      //   payload:{
      //     user:result.data,

      //   }
      // });

      console.log(result, "Requested Todays event    is here ");

      // if res found , 1. show a toast notification , 2. setShowLoader false

      setLoadingTodayEvents(false);
      setTodaysEventsData(result.data);
      toast.success(result.message);
      // Navigate('/admin/home')
    } catch (err) {
      toast.error(err);
      setLoadingTodayEvents(false);
    }
  };

  //Fetching All Upcomming Events

  const getAllUpcomingEvents = async () => {
    setLoadingUpcomingEvents(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/events/getByStatus`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: "upcoming" }),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      // dispatch({
      //   type:"LOGIN_SUCCESS",
      //   payload:{
      //     user:result.data,

      //   }
      // });

      console.log(result, "Requested Upcomming  is here ");

      // if res found , 1. show a toast notification , 2. setShowLoader false

      setLoadingUpcomingEvents(false);
      setUpcomingEvents(result.data);
      toast.success(result.message);
      // Navigate('/admin/home')
    } catch (err) {
      toast.error(err);
      setLoadingUpcomingEvents(false);
    }
  };

  useEffect(() => {
    getAllTodaysEvents();
    getAllUpcomingEvents();
  }, []);

  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row  gap-20 items-center justify-between">
            <div>
              <div className="lg:w-[590px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[45px] md:leading-[60px]">
                  <span className=" text-[#feb60de9]">Empowering</span> individuals to express themselves with confidence
                  and clarity
                </h1>
                <p className="text__para font-serif ">
                  Welcome to our platform where communication flourishes.
                  Elevate your skills, express confidently. Together, we empower
                  individuals to navigate conversations with clarity and
                  conviction.
                </p>{" "}
                <button className="btn text-[20px]">
                  Join us to unlock your voice
                </button>
              </div>

              {/* Hero counter  */}
              <div
                className="mt-[30px] lg:mt-[50px] flex flex-col lg:flex-row lg:items-center gap-5
                lg:gap-[30px]"
              >
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                text-headingColor"
                  >
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para font-semibold text-[20px]  font-serif">
                    Total Users
                  </p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                text-headingColor"
                  >
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para font-semibold text-[20px] font-serif">
                    Active Users
                  </p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                text-headingColor"
                  >
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para font-semibold text-[20px] font-serif">
                    Successfull Events
                  </p>
                </div>
              </div>
            </div>

            {/* Hero content  */}

            <div className="flex flex-col   lg:flex-row gap-[30px] justify-center items-center rounded-lg overflow-hidden">
              <div className="mb-[30px] lg:mb-0  lg:mr-[30px]">
                {/* <img className=" " src={home12} alt="" /> */}
                <img
                  src={home3}
                  height={"420px"}
                  className="rounded-2xl"
                  width={"360px"}
                  alt=""
                />
              </div>

              {
                <div className="flex flex-col lg:flex-col">
                  {/* <img src={home12} alt="" className="w-full lg:w-[70%] mb-[30px] lg:mb-0 rounded-lg" /> */}
                  {/* <img src={home3} alt="" className="w-full lg:mt-6 lg:ml-[30px]  lg:w-[70%] rounded-lg" /> */}
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section End  */}

      <section  className="bg-[#CDF0F3]">
        <div className="container ">
          <div className="lg:-w-[470px] mx-auto">
            <h2 className="heading text-center">Event of the Day</h2>

            <p className="text__para font-semibold mt-0 text-center">
              Break your silence, join us to speak learn and grow
            </p>
          </div>

          <div
            className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[40px]
                  lg:mt-[115px]"
          >
            {loadingTodayEvents ? <HashLoader /> :
              todaysEventsData.map((event) => <EventCard event={event} />)}
          </div>
        </div>
      </section>

      <section className="bg-amber-50">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Upcomming Events</h2>
          </div>

          <div
            className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[90px]
                  lg:mt-[115px]"
          >
            {loadingUpcomingEvents ? <HashLoader /> :
              upcomingEvents.map((event) => <EventCard event={event} />)}

          </div>
          <div className=" grid place-content-center mt-12 ">
            <button className="flex-1  bg-blue-600 rounded-full  text-[20px] font-bold text-white px-8 py-2">
              See all Events
            </button>
          </div>
        </div>
      </section>

      {/*   ==========>>> ABOUT SECTION START  <<<=========== */}
      <About />

      {/*   ==========>>> ABOUT SECTION END  <<<=========== */}

      {/*   ==========>>> SERVICE SECTION START  <<<=========== */}

      <section className="bg-amber-50">
        <div className="container">
          <div className="x1:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Services</h2>
            <p className="text__para mt-0 text-center font-semibold">
              Choose the best one to grow your personality
            </p>
          </div>
          <div
            className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[20px]
                  lg:mt-[20px]"
          >
            <Servicecard about={text[0]} title={"Debate"} photo={debate} />
            <Servicecard
              about={text[1]}
              title={"Group Discussion"}
              photo={home2}
            />
            <Servicecard
              about={text[2]}
              title={"Expert Talk"}
              photo={exoertTalk}
            />
          </div>
        </div>
      </section>

      {/*   ==========>>> SERVICE SECTION END  <<<=========== */}

      {/*  ===========>>> FEATURE SECTION START  <<<==========  */}

      <section  className="bg-[#CDF0F3]">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">Why to choose us</h2>
              <ul className="list-disc text-[18px] ml-4 leading-8 list-inside mt-4 mb-4">
                <li> Get the chance to talk with new people</li>
                <li> Receive dedicated hosting for each event</li>
                <li> Hosts are experts in their respective domains</li>
                <li>
                  {" "}
                  Improve your English speaking skills by joining English events
                </li>
                <li>
                  {" "}
                  Maintain an outstanding profile to become a host on the
                  platform
                </li>
                <li>
                  {" "}
                  Develop critical thinking and problem-solving abilities
                </li>
                <li> Enhance your leadership and teamwork skills</li>
                <li> Gain exposure to diverse perspectives and viewpoints</li>
              </ul>
            </div>

            {/* Image  */}

            <div className="relative z-100 xl:w-[770px] flex justify-end mt-[20px] lg:mt-0">
              <img src={whyus} width={700} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/*  ========>>>  DOCTOR SECTION  <<<===========  */}

      <section className="bg-amber-50">
        <div className="container">
          <div className="xl:w-[690px] mx-auto">
            <h2 className="heading text-center ">Hot Topics</h2>

            <p className=" mb-8 mt-2 text-xl text-center font-semibold ">
              Following topic has been taken several times and yet in demand
            </p>
          </div>
          <div
            className="sm:grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-5 lg:gap-[50px] mt-[20px]
                  lg:mt-[20px]"
          >
            <HotTopicCard />
            <HotTopicCard />
            <HotTopicCard />
            <HotTopicCard />
          </div>
        </div>
      </section>

      <section className="bg-[#CDF0F3]">
        <div className="container">
          <div className="xl:w-[690px] mx-auto">
            <h2 className="heading text-center ">Out top rated Hosts</h2>

            <p className=" mb-8 mt-2 text-xl text-center font-semibold ">
              Here are our top rated host available to serve you anytime
            </p>
          </div>
          <div
            className="sm:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[20px]
                  lg:mt-[20px]"
          >
            <HostCard />
            <HostCard />
            <HostCard />
            <HostCard />
          </div>
        </div>
      </section>

      {/*  ========>>>  DOCTOR SECTION END  <<<===========  */}

      {/*  ========>>>  FAQ SECTION START  <<<===========  */}

      <section className="bg-amber-50">
        <div className="container">
          <div className="flex items-center justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faq1} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most questions by our beloved members</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/*  ========>>>  FAQ SECTION END  <<<===========  */}

      {/*  ========>>>  TESTIMONIAL  SECTION   <<<===========  */}

      <section  className="bg-[#CDF0F3]">
        <div className="container">
          <div className="xl:w-[570px] mx-auto">
            <h2 className="heading text-center">What our members say</h2>
            <p className="text__para text-center mt-0 font-semibold">
              Engaging on this platform has been an absolute delight!.The
              community here is incredibly supportive.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>

      {/*  ========>>>  TESTIMONIAL  SECTION END  <<<===========  */}
    </>
  );
};

export default Home;
