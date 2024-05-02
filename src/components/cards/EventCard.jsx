import React, { useContext } from "react";
import climate1 from "../../assets/images/climate1.jpg";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ShortHostCard from "./ShortHostCard";

const EventCard = ({ event }) => {
  const { token, user } = useContext(authContext);
  const navigate = useNavigate();
  console.log("event host is ", event.host.user);
  const handleRegister = async () => {
    {
      !token && navigate("/login");
    }

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

      // dispatch({
      //   type:"LOGIN_SUCCESS",
      //   payload:{
      //     user:result.data,

      //   }
      // });

      console.log(result, "Requested Todays event    is here ");

      // if res found , 1. show a toast notification , 2. setShowLoader false

      toast.success(result.message);

      // Navigate('/admin/home')
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <div class=" rounded-lg min-w-[300px]  bg-slate-100 group-hover:scale-110 shadow-2xl ">
        {/* <img
          class="h-48 w-full object-cover object-end"
          src={event.photo || climate1}
          alt="Home in Countryside"
        /> */}
        <div class="pb-4">
          <div className="   relative flex justify-center mb-4">
            <img
              class="h-28  -top-[2.71rem]  rounded-full absolute w-28  object-cover object-end z-10"
              src={event.photo || climate1}
              alt="Home in Countryside"
            />

          
          </div>
          <h3 className="font-bold text-[24px] mt-16  rounded-tl-lg rounded-tr-lg   py-2 w-full  text-center  mb-4 text-[#00246B] bg-green-200 ">
            Democracy vs Autocracy vs THeocracy
            </h3>
          <div className="flex  gap-2 px-4">
            <p className="flex-1 text-black-500   font-bold ">Type:</p>
            <p className="text-red-600  font-bold text-[20px] ">{event.type}</p>
          </div>

          <div className="flex gap-2 px-4">
            <p className="flex-1  text-black-500 font-bold ">Date:</p>
            <p className="font-semibold">{event.startDate}</p>
          </div>

          <div className="flex gap-2 px-4">
            <p className="flex-1  text-black-500 font-bold ">Time:</p>
            <p className="font-semibold">{event.startTime}</p>
          </div>

          <div className="flex gap-2 px-4">
            <p className="flex-1  text-black-500 font-bold ">
              Seats Available:
            </p>
            <p className="font-semibold">{event.maxAttendees}</p>
          </div>
          <ShortHostCard hostData={event.host} />
          <div className=" py-4">
            <div className="flex justify-between  gap-5 px-4">
              <button
                className="flex-1 bg-blue-600 rounded-full text-[20px] font-bold text-white px-4 py-2 hover:bg-yellow-500 hover:text-black"
                onClick={handleRegister}
              >
                Register
              </button>
              <button className="flex-1 bg-stone-200 rounded-full text-[20px] font-bold text-black px-4 py-2 hover:bg-green-500 hover:text-white">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
