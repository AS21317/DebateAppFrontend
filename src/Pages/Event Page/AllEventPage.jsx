import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authContext } from "../../context/AuthContext";
import { HashLoader } from "react-spinners";
import EventCard from "../../components/cards/EventCard";

const AllEventPage = () => {
  const [loadingTodayEvents, setLoadingTodayEvents] = useState(false);
  const [loadingUpcomingEvents, setLoadingUpcomingEvents] = useState(false);
  const [loadingCompletedEvents, setLoadingCompletedEvents] = useState(false);

  const [todaysEventsData, setTodaysEventsData] = useState([]);
  const [upcomingEventsData, setUpcomingEventsData] = useState([]);
  const [completedEventsData, setcompletedEventsData] = useState([]);
  const { user, token, role } = useContext(authContext);

   // Fetching all todays Events
   const getAllTodaysEvents = async () => {

    setLoadingTodayEvents(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/events/getByStatus?status=today`,
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
      setLoadingTodayEvents(false);
    }
  };



   //Fetching All upcoming Events

   const getAllUpcomingEvents = async () => {
    setLoadingUpcomingEvents(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/events/getByStatus?status=upcoming`,
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

      console.log(result, "Requested upcoming  is here ");

      // if res found , 1. show a toast notification , 2. setShowLoader false

      setLoadingUpcomingEvents(false);
      setUpcomingEventsData(result.data);
      // toast.success(result.message);
      // Navigate('/admin/home')
    } catch (err) {
      // toast.error(err.message);
      setLoadingUpcomingEvents(false);
    }
  };

  
   //Fetching All Completed Events

   const getAllCompletedEvents = async () => {
    setLoadingCompletedEvents(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/events/getByStatus?status=completed`,
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

      console.log(result, "Requested Completed  is here ");

      // if res found , 1. show a toast notification , 2. setShowLoader false

      setLoadingCompletedEvents(false);
      setcompletedEventsData(result.data);
      // toast.success(result.message);
      // Navigate('/admin/home')
    } catch (err) {
      // toast.error(err.message);
      setLoadingCompletedEvents(false);
    }
  };


  useEffect(() => {
    getAllTodaysEvents();
    getAllUpcomingEvents();
    getAllCompletedEvents()
  }, []);

  return (
    <>
     <section className="hero__section1">
        <div className="container text-center">
          <h2 className="heading">Find an Event</h2>
          <div
            className="max-w-[570px] w-full  mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center 
justify-between"
          >
            <input
              type="search"
              className="py-4 pl-4 pr-2 text-base placeholder:text-base bg-transparent w-full focus:outline-none cursor-pointer
placeholder:text-textColor"
              placeholder="Search events by type,name, host name or language    "
              // value={query}
              // onChange={e=>setQuery(e.target.value)}
            />
            <button  className="btn text-base  px-2 sm:px-4 mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>
    <section className="hero__section pb-8 pt-6 sm:py-[75px]">
      <div className="container w-full max-w-[100%]">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">Upcoming Events</h2>
        </div>

        <div className=" text-center flex justify-center mt-0 sm:mt-10 font-bold text-2xl text-red-600">
          {loadingTodayEvents && loadingUpcomingEvents && (
            <HashLoader className="text-center" size={35} color="red" />
          )}

          {!loadingUpcomingEvents && upcomingEventsData?.length === 0 && (
            <div>
              {" "}
              <h1>No Upcoming Events </h1>
            </div>
          )}
        </div>
        {/* displaying Todays Events */}
        {todaysEventsData?.length > 0 && (
          <div
            className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-[30px] mt-[40px]
        lg:mt-[10px]"
          >
            {todaysEventsData.map((event) => (
              <EventCard event={event} />
            ))}
          </div>
        )}

        {/* displaying Upcoming Events */}
        {upcomingEventsData?.length > 0 && (
          <div
            className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-[30px] mt-[40px]
        lg:mt-[10px]"
          >
            {upcomingEventsData.map((event) => (
              <EventCard event={event} />
            ))}
          </div>
        )}

     
      </div>
    </section>

    <section className="hero__section1 pb-8 pt-6 sm:py-[75px]">
      <div className="container w-full max-w-[100%]">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">Completed Events</h2>
        </div>

        <div className=" text-center flex justify-center  text-[18px]  mt-20 font-bold  sm:text-2xl text-red-600">
          {loadingCompletedEvents  && (
            <HashLoader className="text-center" size={35} color="red" />
          )}

          {!loadingCompletedEvents && completedEventsData?.length === 0 && (
            <div>
              {" "}
              <h1>No Completed Events </h1>
            </div>
          )}
        </div>
        
        {/* displaying Completed Events */}
        {completedEventsData?.length > 0 && (
          <div
            className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-[30px] mt-[40px]
        lg:mt-[10px]"
          >
            {completedEventsData.map((event) => (
              <EventCard event={event} />
            ))}
          </div>
        )}

     
      </div>
    </section>
    </>
  );
};

export default AllEventPage;
