import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import debateImg from "../../assets/images/debate.jpg";
import useFetchData from "../../hooks/useFetchData";
import { useContext, useEffect, useState } from "react";
import HostAbout from "../../Pages/HostPage/HostAbout";
import HostAreaOfIntrest from "../../Pages/HostPage/HostAreaOfIntrest";
import HostReviews from "../../Pages/HostPage/HostReviews";
import SidePannel from "../../Pages/Doctors/SidePannel";
import { IoCalendarOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import HostCard from "./HostCard";
import AttendeesCard from "./AttendeesCard";
import { Hand } from "lucide-react";
import { authContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

const sociallinks = [
  {
    path: "https: //www.youtube.com/c/CodingWithMuhib",
    icon: <AiFillYoutube className="Mgroup-hover:text-white w-4 h-5" />,
  },

  {
    path: "https: //github.com/codingwithmuhib",
    icon: <AiFillGithub className=" Mgroup-hover:text-white w-4 h-5" />,
  },

  {
    path: "https: //ww.instagram.com/muhib160.official/",
    icon: <AiFillInstagram className="Mgroup-hover:text-white w-4 h-5" />,
  },

  {
    path: "https://www.linkedin.com/in/codingwithmuhib/",
    icon: <RiLinkedinFill classame=" Mgroup-hover:text-white w-4 h-5" />,
  },
];

const EventDetailPage = () => {
  const [tab, setTab] = useState("about");
  const { token, user, dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const {
    loading,
    error,
    data: event,
  } = useFetchData(`${import.meta.env.VITE_BASE_URL}/api/v1/events/get/${id}`);

  const checkIfRegistered = () => {
    if(!token || token === 'null') return  false;
    return user.events.includes(event._id);
  }

  const [isRegistered, setIsRegistered] = useState(false)
  const [registerLoading, setRegisterLoading] = useState(false)
  
  useEffect(() => {
    setIsRegistered(checkIfRegistered())
  }, [event])


  console.log("event details is : ", event);

  // this is taken becouse host can remove some attendies from his side 
  const allowedAttendees = event.attendees?.filter(
    (attendee) => attendee.status === "allowed"
  ).length;


  // FUnction to register 
  const handleRegister = async () => {
    if(!token || token === 'null'){
      navigate("/login");
      return;
    }

    setRegisterLoading(true)
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
      setRegisterLoading(false)
      toast.success(result.message);
      setIsRegistered(true);
      setIsUpdated(true);

      // Navigate('/admin/home')
    } catch (err) {
      setRegisterLoading(false)
      toast.error(err.message);
    }
  };

  const data = {
    name: "",
    about: "",
    qualification: "",
    areaOfIntrest: "",
    reviews: "",
    experience: "",
  };
  return (
    <section className='hero__section py-10  sm:py-[75px] '>
      <div className="max-w-[1170px] px-5 mx-auto">
       <div className=" flex justify-center">
       {loading && <HashLoader size={35} color="black" />}
       </div>
        {!loading && (
          <>
          <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[50px]">
            <div className="md:col-span-1">
              <div className="flex  gap-20">
                <div className=" flex flex-col">
                  <div class="flex h-60 flex-col text-black  justify-between overflow-hidden">
                    <img
                      src={event.photo}
                      class=" h-full w-full object-cover "
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
                        <p className=" ml-2  font-semibold">05-25-2021</p>
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
                        <p className=" font-semibold">10:00 PM</p>
                      </div>
                    </div>
                    <div className=" flex flex-row items-center gap-2 mb-3  ">
                      <BsPersonPlus size={15} color="#60a5fa" />
                      <span className="text-sm  font-medium">
                        Seats Available:
                        <span className=" text-red-500 font-bold">
                          {" "}
                          {event.maxAttendees - allowedAttendees}
                        </span>
                      </span>
                    </div>
                    <button 
                        onClick={handleRegister}
                        disabled={registerLoading || isRegistered}
                        className={`mb-2 md:mb-0 px-5 py-2 shadow-sm tracking-wider text-white rounded-full ${isRegistered? "bg-orange-500" :"hover:bg-green-500 bg-green-600"}`}
                        type="button"
                        aria-label="like"
                      > 
                        {registerLoading? <HashLoader size={25} color="white" /> :
                        isRegistered? "Registered": "Register"}
                      </button>
                  </div>
                </div>
              </div>
            </div>
            <HostCard hostData={event.host} role={"Host"} />
            <HostCard hostData={event.host} role={"Co-Host"} />
          </div>

        <div className="mt-[20px] border-b border-solid Dborder-[#0066ff34]">
          <button
            onClick={() => setTab("about")}
            className={`${
              tab === "about" && "border-b border-solid border-primaryColor"
            } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
          >
            Description
          </button>

          <button
            onClick={() => setTab("rule")}
            className={`${
              tab === "rule" && "border-b border-solid border-primaryColor"
            } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
          >
            Rules
          </button>
          <button
            onClick={() => setTab("attendees")}
            className={`${
              tab === "attendees" && "border-b border-solid border-primaryColor"
            } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
          >
            Attendees
          </button>
        </div>
        <div className="mt-[50px]">
          {tab === "about" && <h1>{event.description}</h1>}

          {tab === "rule" && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              asperiores aspernatur libero repudiandae. Quod dolorum quibusdam
              corrupti esse voluptas veniam commodi dolor similique odio enim?
              Repudiandae et inventore consequuntur odio!
            </p>
          )}
          {tab === "attendees" && (
            <div className=" flex flex-wrap  justify-evenly">
              {event.attendees.map((attendee) => (
                <AttendeesCard attendee={attendee} />
              ))}
            </div>
          )}
       
       
        </div>

        </>
      )}

      </div>
    </section>
  );
};

export default EventDetailPage;

/**
 * 
 * 
 * 
 * 
 * <div className="mt-[20px] border-b border-solid Dborder-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Description
                </button>

                <button
                  onClick={() => setTab("rule")}
                  className={`${
                    tab === "rule" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Rules
                </button>
                <button
                  onClick={() => setTab("attendees")}
                  className={`${
                    tab === "attendees" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Attendees
                </button>
              </div>
 */
