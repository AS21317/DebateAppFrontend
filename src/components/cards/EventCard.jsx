import React, { useContext, useState } from "react";
import climate1 from "../../assets/images/climate1.jpg";
import { authContext } from "../../context/AuthContext";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
import ShortHostCard from "./ShortHostCard";
import {IoCalendarOutline} from 'react-icons/io5'
import {MdLanguage} from 'react-icons/md'
import {BsPersonPlus} from 'react-icons/bs'
import {BsPersonFill} from 'react-icons/bs'
import { HashLoader } from "react-spinners";


const convertTo12HourFormat = (time24) => {
  // Split the time string into hours and minutes
  const [hours24, minutes] = time24.split(':').map(Number);

  // Determine AM or PM based on hours
  const period = hours24 >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  let hours12 = hours24 % 12;
  hours12 = hours12 === 0 ? 12 : hours12; // Handle midnight (0 hours)

  // Format the time in 12-hour format
  const time12 = `${hours12}:${String(minutes).padStart(2, '0')} ${period}`;

  return time12;
}

const formatDate = (date) => {
  date = new Date(date)
  
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}


const EventCard = ({ event }) => {
  let { token, user, dispatch } = useContext(authContext);
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();

  const startDate = formatDate(event.startDate)
  const startTime = convertTo12HourFormat(event.startTime)

  const checkIfRegistered = () => {
    if(!token || token === 'null') return  false;
    return user.events.includes(event._id);
  }

  const [isRegistered, setIsRegistered] = useState(checkIfRegistered())
  const [isUpdated, setIsUpdated] = useState(false)
  
  const allowedAttendees = event.attendees.filter((attendee) => attendee.status === "allowed").length;

  const seatsAvailable = event.maxAttendees - allowedAttendees - (isUpdated? 1: 0);

  console.log("event host is ", event.host.user);


  console.log("event id is: ",event._id)

// Function to register user
  const handleRegister = async () => {
    if(!token || token === 'null'){
      navigate("/login");
      return;
    }
    setLoading(true)
    // calling register api
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/events/registerUser/${
          event._id
        }`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId: user._id }),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type:"LOGIN_SUCCESS",
        payload:{
          user:result.data.user,
        }
      });


      // if res found , 1. show a toast notification , 2. setShowLoader false
      setLoading(false)
      toast.success(result.message);
      setIsRegistered(true);
      setIsUpdated(true);

      // Navigate('/admin/home')
    } catch (err) {
      setLoading(false)
      toast.error(err.message);
    }
  };

  return (
    <>
      <div>
        <div className="relative flex flex-row items-center justify-center mb-5 ">
          <div className="flex flex-row flex-wrap">
            <div className="flex flex-col">
              <div className="bg-white shadow-md  rounded-3xl p-3">
                <div className="flex-none lg:flex flex-col">
                  <div className=" gap-y-5 w-[300px] h-35 sm:h-35 sm:w-[200px] flex mx-auto  md:h-40 md:w-[230px] lg:h-48 lg:w-[280px] lg:mb-0 mb-3">
                    <img
                      src={event.photo}
                      alt="Just a flower"
                      className="w-full h-full object-scale-down lg:object-cover rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto  justify-evenly py-2">
                    <div className="flex flex-wrap ">
                      <div className="w-full flex justify-between  font-semibold text-sm text-red-500  ">
                       <p>#{event.type}</p>

                       <div className="flex flex-row items-center gap-1 text-green-600 ">
                          <MdLanguage size={15} color="green" /> 
                          
                          <span>{event.language}</span> 
                        </div>
                      </div>
                    </div>

                    <h2 className="flex-auto  text-lg font-bold">
                        {event.topic.name}
                      </h2>

                      

                    {/* <p className="mt-3"></p> */}
                    <div className="flex py-3  text-sm text-gray-500">
                      <div className="flex-1 inline-flex items-center">
                      <IoCalendarOutline color="#60a5fa" size={15} />
                        <p className=" ml-2  font-semibold">{startDate}</p>
                      </div>

                      <div className="flex-1 inline-flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <p className=" font-semibold">{startTime}</p>
                      </div>
                    </div>
                    <div className=" flex flex-row items-center gap-2 mb-3  ">
                      <BsPersonPlus size={15} color="#60a5fa" />
                      <span className="text-sm  font-medium">
                        Seats Availability: {" "}
                        <span className=" text-red-500 font-bold">
                          {seatsAvailable? seatsAvailable: "Fully Booked"}
                        </span>
                      </span>
                    </div>

                    <div className="flex mb-2  border-t border-gray-200 "></div>
                    
                    <div className=" flex flex-row items-center gap-2 mb-1  ">
                      <img src={event.host.user.photo} alt={"HostPic"} width={25} height={25} className="rounded-full" />
                      
                      <span className="text-sm capitalize font-medium">
                        {event.host.user.name} ( Host )
                      </span>
                    </div>

                    <div className=" flex flex-row items-center gap-2 mb-1  ">
                      <img src={event.host.user.photo} alt={"HostPic"} width={25} height={25} className="rounded-full" />

                      <span className="text-sm  font-medium">
                        {event.host.user.name} ( Co-Host )
                      </span>
                    </div>

                    <div className="flex pb-4 mt-2 border-t border-gray-200 "></div>
                    
                   
                    
                    <div className="flex space-x-3 text-sm font-medium justify-evenly">
                      <button 
                        onClick={handleRegister}
                        disabled={loading || isRegistered}
                        className={`mb-2 md:mb-0 px-5 py-2 shadow-sm tracking-wider text-white rounded-full ${isRegistered? "bg-orange-500" :"hover:bg-green-500 bg-green-600"}`}
                        type="button"
                        aria-label="like"
                      > 
                        {loading? <HashLoader size={25} color="white" /> :
                        isRegistered? "Registered": "Register"}
                      </button>

                        <Link  to={`/event/eventDetails/${event._id}`} className="mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                          See Details
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
