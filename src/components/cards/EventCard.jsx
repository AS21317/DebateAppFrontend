import React, { useContext, useEffect, useState } from "react";
import climate1 from "../../assets/images/climate1.jpg";
import { authContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import ShortHostCard from "./ShortHostCard";
import { IoCalendarOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { HashLoader } from "react-spinners";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import TakeResonCard from "../../components/cards/TakeResonCard";

import { BsFillCalendarMonthFill } from "react-icons/bs";
import ReviewCard from "./ReviewCard";

const convertTo12HourFormat = (time24) => {
  const [hours24, minutes] = time24.split(":").map(Number);
  const period = hours24 >= 12 ? "PM" : "AM";
  let hours12 = hours24 % 12;
  hours12 = hours12 === 0 ? 12 : hours12;
  const time12 = `${hours12}:${String(minutes).padStart(2, "0")} ${period}`;
  return time12;
};

const formatDate = (date) => {
  date = new Date(date);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const EventCard = ({ event, role = "user" }) => {
  const [showModal, setShowModal] = useState(false);

  // to handle moddal oppenning
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal1 = document.getElementById("my_modal_1");
      const modal3 = document.getElementById("my_modal_3");
      if (modal1 && event.target === modal1) {
        modal1.close();
        setShowModal(false);
      }
      if (modal3 && event.target === modal3) {
        modal3.close();
        setShowModal(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const { token, user, dispatch } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log("founded event is ", event);
  const startDate = formatDate(event.startDate);
  const startTime = convertTo12HourFormat(event.startTime);

  const checkIfRegistered = () => {
    if (!token || token === "null") return false;
    return user.events.includes(event._id);
  };

  // for checking if already registered or not
  const [isRegistered, setIsRegistered] = useState(checkIfRegistered());

  // updating for updating seat available number
  const [isUpdated, setIsUpdated] = useState(false);

  // updating for marked successfuly
  const [isMarkedDone, setIsMarkedDone] = useState(
    event.status === "completed"
  );

  const allowedAttendees = event.attendees.filter(
    (attendee) => attendee.status === "allowed"
  ).length;
  const seatsAvailable =
    event.maxAttendees - allowedAttendees - (isUpdated ? 1 : 0);

  const handleRegister = async () => {
    if (!token || token === "null") {
      navigate("/login");
      return;
    }
    setLoading(true);
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
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data.user,
        },
      });

      setLoading(false);
      toast.success(result.message);
      setIsRegistered(true);
      setIsUpdated(true);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  const handleMarkDone = async () => {
    if (!token || token === "null") {
      navigate("/login");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/events/update/${event._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: "completed" }),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      // dispatch({
      //   type: "LOGIN_SUCCESS",
      //   payload: {
      //     user: result.data.user,
      //   }
      // });

      setLoading(false);
      toast.success(result.message);
      setIsMarkedDone(true);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  const handleApproveEvent = async (e, meetLink) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/events/approve/${event._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ meetLink }),
        }
      );

      console.log(event);

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      console.log(result, "Request Event   is here ");

      // if res found , 1. show a toast notification , 2. setLoading false

      setLoading(false);

      toast.success(result.message);
      // Navigate('/admin/home')
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  const handleCancelEvent = async (e, reason) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/events/cancel/${event._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ reason }),
        }
      );

      console.log(event);

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      console.log(result, "Request Event   is here ");

      // if res found , 1. show a toast notification , 2. setLoading false

      setLoading(false);
      toast.success(result.message);
      // Navigate('/admin/home')
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-row items-center justify-center mb-5">
      <div className="flex flex-row flex-wrap">
        <div className="flex flex-col">
          <div className="bg-white shadow-md rounded-3xl p-3">
            <div className="flex-none lg:flex flex-col">
              <div className="gap-y-5 w-[300px] h-35 sm:h-35 sm:w-[200px] flex mx-auto md:h-40 md:w-[230px] lg:h-48 lg:w-[280px] lg:mb-0 mb-3">
                <img
                  src={event.photo}
                  alt="Event Thumbnail"
                  className="w-full h-full object-scale-down lg:object-cover rounded-2xl"
                />
              </div>
              <div className="flex-auto justify-evenly py-2">
                <div className="flex flex-wrap ">
                  <div className="w-full flex justify-between  font-semibold text-sm text-red-500">
                    <p>#{event.type}</p>
                    <div className="flex flex-row items-center gap-1 text-green-600 ">
                      <MdLanguage size={15} color="green" />
                      <span>{event.language}</span>
                    </div>
                  </div>
                </div>

                <h2 className="flex-auto w-[275px] text-lg font-bold">
                  {event.topic.name}
                </h2>

                <div className="flex py-3  text-sm text-gray-500">
                  <div className="flex-1 inline-flex items-center">
                    <IoCalendarOutline color="#60a5fa" size={15} />
                    <p className=" ml-2  font-semibold">{startDate}</p>
                  </div>
                  <div className="flex-1 inline-flex items-center">
                    <BsFillCalendarMonthFill color="#60a5fa" size={15} />
                    <p className="ml-2 font-semibold">{startTime}</p>
                  </div>
                </div>

                <div className="flex mb-2 border-t border-gray-200 "></div>

                <div className=" flex flex-row items-center gap-2 mb-1">
                  <img
                    src={event.host.user.photo}
                    alt={"HostPic"}
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                  <span className="text-sm capitalize font-medium">
                    {event.host.user.name} ( Host )
                  </span>
                </div>

                <div className="flex flex-row items-center gap-2 mb-1">
                  <img
                    src={event.host.user.photo}
                    alt={"HostPic"}
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                  <span className="text-sm  font-medium">
                    {event.host.user.name} ( Co-Host )
                  </span>
                </div>

                <div className="flex pb-4 mt-2 border-t border-gray-200 "></div>

                <div className="flex space-x-3 text-sm font-medium justify-evenly">
                  {role === "user" && (
                    <button
                      onClick={handleRegister}
                      disabled={loading || isRegistered}
                      className={`mb-2 md:mb-0 px-5 py-2 shadow-sm tracking-wider text-white rounded-full ${
                        isRegistered
                          ? "bg-orange-500"
                          : "hover:bg-green-500 bg-green-600"
                      }`}
                      type="button"
                      aria-label="like"
                    >
                      {loading ? (
                        <HashLoader size={25} color="white" />
                      ) : isRegistered ? (
                        "Registered"
                      ) : (
                        "Register"
                      )}
                    </button>
                  )}

                  {role === "host" && (
                    <button
                      onClick={handleMarkDone}
                      disabled={loading || isMarkedDone}
                      className={`mb-2 md:mb-0 px-5 py-2 shadow-sm tracking-wider text-white rounded-full ${
                        isMarkedDone
                          ? "bg-orange-500"
                          : "hover:bg-green-500 bg-green-600"
                      }`}
                      type="button"
                      aria-label="like"
                    >
                      {loading ? (
                        <HashLoader size={25} color="white" />
                      ) : isMarkedDone ? (
                        "Completed"
                      ) : (
                        "Mark Done"
                      )}
                    </button>
                  )}

                  {role === "cancelled" && (
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                      className={`mb-2 md:mb-0 px-5 py-2 shadow-sm tracking-wider text-white rounded-full ${
                        isMarkedDone
                          ? "bg-orange-500"
                          : "hover:bg-red-500 bg-orange-600"
                      }`}
                      type="button"
                      aria-label="like"
                    >
                      {loading ? (
                        <HashLoader size={25} color="white" />
                      ) : (
                        "Reason"
                      )}
                    </button>
                  )}

                  <div className="flex justify-center">
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <ReviewCard reason={event.reasonIfCancelled} date={event.updatedAt} name = {event.topic.name} />
                        

                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>

                  {role === "requested" && (
                    <>
                      <button
                        onClick={() => {
                          document.getElementById("my_modal_3").showModal(),
                            setShowModal(true);
                        }}
                        className="text-base px-5 py-2  bg-green-500 rounded-full text-white flex items-center justify-center"
                      >
                        <TiTick size={24} />
                      </button>
                      <button
                        onClick={() => {
                          document.getElementById("my_modal_1").showModal(),
                            setShowModal(true);
                        }}
                        className="  bg-red-500 px-5 py-2  rounded-full text-white flex items-center justify-center"
                      >
                        <RxCross2 size={24} />
                      </button>

                      {/* Modal Section for cancelation */}
                      <div
                        className={`${
                          !showModal && "hidden"
                        } flex justify-center`}
                      >
                        <dialog id="my_modal_1" className="modal modal1">
                          <div className="modal-box">
                            <TakeResonCard
                              name={event.host.user.name}
                              title={"Reason for cancelation"}
                              handleSubmit={handleCancelEvent}
                            />

                            <div className="modal-action">
                              <form method="dialog">
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </div>

                      {/* Modal Section for Approving */}
                      <div
                        className={`${
                          !showModal && "hidden"
                        } flex justify-center`}
                      >
                        <dialog id="my_modal_3" className="modal modal3">
                          <div className="modal-box">
                            <TakeResonCard
                              name={event.host.user.name}
                              title={" Enter Gmeet Link"}
                              handleSubmit={handleApproveEvent}
                            />

                            <div className="modal-action">
                              <form method="dialog">
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </div>
                    </>
                  )}

                  <Link
                    to={`/event/eventDetails/${event._id}`}
                    className="mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 "
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
