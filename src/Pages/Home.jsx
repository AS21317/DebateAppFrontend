import React, { useContext, useEffect, useState } from "react";
import home2 from "../assets/images/home2.jpg";
import home3 from "../assets/images/home3.jpg";
import whyus from "../assets/images/whyus.png";
import debate from "../assets/images/debate.jpg";
import exoertTalk from "../assets/images/expertTalk.jpg";
import faq1 from "../assets/images/faq1.png";

import About from "../components/About/About";
import FaqList from "../components/faq/FaqList";
import Testimonial from "../components/Testtimonial/Testimonial";
import EventCard from "../components/cards/EventCard";
import Servicecard from "../components/cards/Servicecard";
import HotTopicCard from "../components/cards/HotTopicCard";
import HostCard from "../components/cards/HostCard";
import useFetchData from "../hooks/useFetchData";
import { authContext } from "../context/AuthContext";
import { HashLoader } from "react-spinners";
import { Slide, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";

const text = [
  "Embark on intellectual journeys and sharpen your argumentative prowess with our Debate Services.oin a vibrant community of debaters committed to exploring diverse viewpoints and honing their rhetorical skills.",
  "Facilitate collaboration, deepen understanding, and cultivate consensus with our Group Discussion Services. Explore complex issues, share insights, and forge connections with like-minded individuals.",
  "Gain  insights from industry leaders, subject matter experts, and thought leaders with our Expert Talk Services.  Expand your horizons with curated talks and discussions by experts in their fields.",
];

const Home = () => {
  const { user, token, role } = useContext(authContext);

  const [loadingTodayEvents, setLoadingTodayEvents] = useState(false);
  const [loadingUpcomingEvents, setLoadingUpcomingEvents] = useState(false);
  const [loadingAllTopics, setloadingAllTopics] = useState(false);

  const [todaysEventsData, setTodaysEventsData] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [allTopics, setallTopics] = useState([]);
  // console.log("ENV is : ", import.meta.env.VITE_BASE_URL)

  // Fetching all hosts
  const {
    loading,
    error,
    data: hostData,
  } = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/api/v1/host/getAll?limit=8`
  );
  console.log(hostData);

  // Fetching All Topics

  // Fetching all todays Events
  const getAllTodaysEvents = async () => {
    setLoadingTodayEvents(true);
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/v1/events/getByStatus?status=today`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
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
      console.log("Hostt details is ", result.data[0].host);

      // if res found , 1. show a toast notification , 2. setShowLoader false

      setLoadingTodayEvents(false);
      setTodaysEventsData(result.data);
      // toast.success(result.message);
      // Navigate('/admin/home')
    } catch (err) {
      // toast.error(err.message);
      toast.error(err);
      setLoadingTodayEvents(false);
    }
  };

  //Fetching All Upcomming Events

  const getAllUpcomingEvents = async () => {
    setLoadingUpcomingEvents(true);
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/v1/events/getByStatus?status=upcoming`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
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
      // toast.success(result.message);
      // Navigate('/admin/home')
    } catch (err) {
      toast.error(err);
      setLoadingUpcomingEvents(false);
    }
  };

  const getAllTopic = async () => {
    setloadingAllTopics(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/topic/getAll`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
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

      console.log(result, "Requested Topics  is here ");

      // if res found , 1. show a toast notification , 2. setShowLoader false

      setloadingAllTopics(false);
      setallTopics(result.data);
      // toast.success(result.message);
      console.log("type of ", result.data, typeof result.data);
      // Navigate('/admin/home')
    } catch (err) {
      // toast.error(err.message);
      setloadingAllTopics(false);
    }
  };

  console.log("all topics is ", allTopics);

  // sort and get the first 4 topics
  // Sort the data based on the length of events array in descending order
  allTopics.length > 0 &&
    allTopics.sort((a, b) => b.events.length - a.events.length);

  // Get the first four elements after sorting
  const homeTopics = allTopics.length > 0 && allTopics?.slice(0, 6);
  console.log("topics is ", homeTopics, typeof homeTopics);

  useEffect(() => {
    getAllTodaysEvents();
    getAllUpcomingEvents();
    getAllTopic();
  }, []);

  return (
    <>
      <section className="hero__section pt-4 md:pt-[60px] ">
        <div className="container">
          <div className="flex flex-col-reverse lg:flex-row   items-center justify-between">
            <div>
              <div className="lg:w-[590px]">
                <h1 className="text-[26px] leading-[36px] text-headingColor font-[800] md:text-[45px] md:leading-[60px]">
                  <span className=" text-[#feb60de9]">Empowering</span>{" "}
                  individuals to express themselves with confidence and clarity
                </h1>
                <p className="text__para text-base sm:text-lg font-serif ">
                  Welcome to our platform where communication flourishes.
                  Elevate your skills, express confidently. Together, we empower
                  individuals to navigate conversations with clarity and
                  conviction.
                </p>{" "}
                <Link to={"/events"}>
                  <button className="btn px-4 sm:px-7  md:text-[20px]">
                    Join us to unlock your voice
                  </button>
                </Link>
              </div>

              {/* Hero counter  */}
              <div
                className="mt-[30px] lg:mt-[50px] flex flex-wrap justify-start md:flex-row lg:items-center gap-5
                lg:gap-[30px]"
              >
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[700]
                text-headingColor"
                  >
                    130+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para font-semibold text-[18px]  font-serif">
                    Total Users
                  </p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[700]
                text-headingColor"
                  >
                    80+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para font-semibold text-[18px] font-serif">
                    Active Users
                  </p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[700]
                text-headingColor"
                  >
                    20+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para font-semibold text-[18px] font-serif">
                    Successful Events
                  </p>
                </div>
              </div>
            </div>

            {/* Hero content  */}

            <div className="flex flex-col   lg:flex-row gap-[30px] justify-center items-center rounded-lg overflow-hidden">
              <div className=" lg:mb-0  lg:mr-[30px]">
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
      {/* bg-[#CDF0F3] */}
      <section className="hero__section1 pt-4 md:pt-[60px]  ">
        <div className="container ">
          <div className="mx-auto">
            <h2 className="heading text-center">Event of the Day</h2>

            <p className="text__para w-[300px] sm:text-[20px] sm:w-fit mx-auto font-semibold mt-0 text-center">
              Break your silence, join us to speak learn and grow
            </p>
          </div>

          <div className="  text-center flex justify-center mt-10 sm:mt-16 font-bold text-2xl text-red-600">
            {loadingTodayEvents && (
              <HashLoader className="text-center" size={35} color="red" />
            )}

            {!loadingTodayEvents && todaysEventsData.length === 0 && (
              <div>
                {" "}
                <h1>No Event for Todays </h1>
              </div>
            )}
          </div>

          {todaysEventsData?.length > 0 && (
            <div
              className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[40px]
          lg:mt-[115px]"
            >
              {todaysEventsData.map((event) => (
                <EventCard event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="hero__section py-6 sm:pb-[75px] sm:pt-[60px]">
        <div className="container w-full max-w-[100%]">
          <div className="mx-auto">
            <h2 className="heading text-center">Upcoming Events</h2>
            <p className="text__para w-[300px] sm:text-[20px] sm:w-fit font-semibold mt-0 text-center mx-auto">
              Elevate your voice and expand your horizons at our upcoming event
            </p>
          </div>

          {loadingTodayEvents && (
            <div className=" text-center flex justify-center mt-10 font-bold text-2xl text-red-600">
              <HashLoader className="text-center" size={35} color="red" />{" "}
            </div>
          )}

          {!loadingUpcomingEvents && upcomingEvents?.length === 0 && (
            <div className=" text-center flex justify-center mt-10 font-bold text-2xl text-red-600">
              <h1>No Upcoming Events </h1>
            </div>
          )}
        </div>

        {upcomingEvents?.length > 0 && (
          <div
            className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] 
        lg:mt-[40px]"
          >
            {upcomingEvents.map((event) => (
              <EventCard event={event} />
            ))}
          </div>
        )}

        <div className=" grid place-content-center mt-12 ">
          <Link to={"/events"}>
            <button className="flex-1  bg-blue-600 rounded-full  text-[20px] font-bold text-white px-8 py-2">
              See all Events
            </button>
          </Link>
        </div>
      </section>

      {/*   ==========>>> ABOUT SECTION START  <<<=========== */}
      <About />

      {/*   ==========>>> ABOUT SECTION END  <<<=========== */}

      {/*   ==========>>> SERVICE SECTION START  <<<=========== */}

      <section className="hero__section sm:pb-[60px]  pt-4 pb-6  md:pt-[60px] ">
        <div className="container max-w-full">
          <div className="x1:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Services</h2>
            <p className="text__para mt-0 text-center font-semibold">
              Choose the best one to grow your personality
            </p>
          </div>
          <div
            className=" sm:grid grid-cols-1    md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[20px]
                  lg:mt-[20px]"
          >
            <Servicecard
              about={text[0]}
              params={"debate"}
              title={"Debate"}
              photo={debate}
            />
            <Servicecard
              params={"gd"}
              about={text[1]}
              title={"Group Discussion"}
              photo={home2}
            />
            <Servicecard
              params={"et"}
              about={text[2]}
              title={"Expert Talk"}
              photo={exoertTalk}
            />
          </div>
        </div>
      </section>

      {/*   ==========>>> SERVICE SECTION END  <<<=========== */}

      {/*  ===========>>> FEATURE SECTION START  <<<==========  */}

      <section className="hero__section1  pb-6 sm:pb-[75px]  pt-2 md:pt-[60px]">
        <div className="container">
          <div className="flex items-center justify-between gap-y-4 flex-col-reverse lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">Why to choose us</h2>
              <ul className="list-disc text-base ml-4 sm:leading-8 md:list-inside mt-4 mb-4">
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

      {/*  ========>>>  HOT TOPICs SECTION START <<<===========  */}

      <section className="hero__section pt-4 pb-6 sm:pb-[40px] md:pt-[60px] ">
        <div className="container events mx-auto ">
          <div className="xl:w-[600px] mx-auto">
            <h2 className="heading text-center ">Hot Topics</h2>

            <p className=" mb-8 mt-2 text__para text-base   sm:text-xl text-center font-semibold ">
              Following topic has been taken several times and yet in demand
            </p>
          </div>

          {Array.isArray(homeTopics) && !loadingAllTopics ? (
            <Slider role={"event"} sliderData={homeTopics} />
          ) : (
            <HashLoader size={35} color="red" />
          )}
        </div>
      </section>

      {/*  ========>>>  HOT TOPICs SECTION END <<<===========  */}

      {/*  ========>>>  HOST SECTION END  <<<===========  */}

      <section className="hero__section1 pb-6 sm:pb-[50px]  pt-4 md:pt-[60px] ">
        <div className="container max-w-full">
          <div className="xl:w-[690px] mx-auto ">
            <h2 className="heading text-center ">Out top rated Hosts</h2>

            <p className=" mb-8 mt-2 text-base sm:text-xl text-center font-semibold ">
              Here are our top rated host available to serve you anytime
            </p>
          </div>

          {<Slider role={"host"} sliderData={hostData} />}
        </div>
      </section>

      {/*  ========>>>  DOCTOR SECTION END  <<<===========  */}

      {/*  ========>>>  FAQ SECTION START  <<<===========  */}

      <section className="hero__section pt-4 pb-6 sm:py-[75px]   ">
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

      <section className="hero__section1 pt-6 pb-6 sm:pb-[50px] sm:pt-[75px] md:pt-[60px]">
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
