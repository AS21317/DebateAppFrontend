import React, { useEffect, useState } from "react";
import { useContext } from "react";


import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MyBookings from "../../Pages/User-Page/MyBookings";
import { authContext } from "../../context/AuthContext";





const ProfileCard = () => {
  const { dispatch ,user:userData,loading,error} = useContext(authContext);
  const [tab, setTab] = useState("bookings");
 const [cardType, setCardType]= useState("today")

  const navigate = useNavigate()
  

  console.log(userData, "Data is ");

  const handleLogout = () => {
    
    dispatch({ type: "LOGOUT" });
    navigate('/home')
  };

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}

        {error && !loading && <Error errMessage={error} />}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                  <img
                    src={userData.photo}
                    alt=""
                    className="w-full h-full rounded-full "
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold ">
                  {userData.name}
                </h3>
                <p className=" text-textColor leading-6 font-medium text-[15px] ">
                  {userData.email}
                </p>
                
              </div>
               <div className="mt-6">
               <div className="flex mb-2 justify-between gap-2 px-8">
            <p className="flex-1  text-black-500 font-bold ">
              Total Debates:
            </p>
            <p className='font-semibold'>5</p>
          </div>
          <div className="flex mb-2 justify-between gap-2 px-8">
            <p className="flex-1  text-black-500 font-bold ">
              Total GD:
            </p>
            <p className='font-semibold'>15</p>
          </div>
          <div className="flex mb-2 justify-between gap-2 px-8">
            <p className="flex-1  text-black-500 font-bold ">
              Total Reviews:
            </p>
            <p className='font-semibold'>45</p>
          </div>
          <div className="flex mb-2 justify-between gap-2 px-8">
            <p className="flex-1  text-black-500 font-bold ">
              Avr Rating:
            </p>
            <p className='font-semibold'>4.5</p>
          </div>
               </div>
        

              <div className="mt-[30px] md:mt-[50px] ">

              <button
                  onClick={()=>{setTab("bookings"),setCardType("requested")}}
                  className="w-full bg-[#8e8821] p-3 font-semibold  mt-4 text-[16px] leading-7 rounded-md text-white"
                >
                  Requested Events { " "} (2)
                </button>

                <button
                  onClick={()=>{setTab("profile"),setCardType("")}}
                  className="w-full bg-[#6060cd] p-3 font-semibold mt-4 text-[16px] leading-7 rounded-md text-white"
                >
                  Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 mt-4 text-[16px] leading-7 rounded-md text-white"
                >
                  Logout
                </button>


                <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                  Delete account
                </button>
                
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px] ml-0">
              
            <button
                  onClick={() => {setTab("bookings") , setCardType("today")}}
                  className={` ${
                    cardType === "today" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-4 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Today Events
                </button>


                <button
                  onClick={() => {setTab("bookings") , setCardType("future")}}
                  className={` ${
                    cardType === "future" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Future Events
                </button>

                <button
                onClick={() => {setTab("bookings") , setCardType("past")}}
                  className={` ${
                    cardType === "past" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Past Events
                </button>


                <button
                  onClick={() => {setTab("bookings"), setCardType("cancel")}}
                  className={` ${
                    cardType === "cancel" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Canceled Events
                </button>
                
                
                
             

              {tab === "bookings" ? (
                <MyBookings cardType={cardType} />
              ) : (
                <Profile user={userData} />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default ProfileCard;
