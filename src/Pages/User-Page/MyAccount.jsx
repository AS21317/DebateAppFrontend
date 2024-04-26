import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import usegetProfile from "../../hooks/useFetchData";
import Loader from "../../Loader/Loader";

import userImg from "../../assets/images/doctor-img01.png";
import Error from "../../components/Error/Error";
const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("bookings");
 const [cardType, setCardType]= useState("upcomming")

  const {
    data: userData,
    loading,
    error,
  } = usegetProfile(`${import.meta.env.VITE_BASE_URL}/api/v1/user/profile/me`);
  

  console.log(userData, "Data is ");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
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
                <p className=" text-textColor leading-6 font-medium text-[15px] ">
                  Blood Type : <span>{userData.bloodType}</span>{" "}
                </p>

              </div>
                <div className="flex mt-6 justify-between gap-2 px-8">
            <p className="flex-1  text-black-500 font-bold ">
              Total Debates:
            </p>
            <p className='font-semibold'>5</p>
          </div>
          <div className="flex mt-6 justify-between gap-2 px-8">
            <p className="flex-1  text-black-500 font-bold ">
              Total GD:
            </p>
            <p className='font-semibold'>15</p>
          </div>
        

              <div className="mt-[30px] md:mt-[50px] ">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                >
                  Logout
                </button>
                <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                  Delete account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px] ml-4">
              
              <button
                  onClick={() => {setTab("settings"),setCardType("settings")}}
                  className={`${
                    cardType === "settings" && 
                    "bg-primaryColor text-white font-normal"
                  } py-2 mr-5 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Profile Settings
                </button>

                <button
                  onClick={() => {setTab("bookings") , setCardType("upcomming")}}
                  className={` ${
                    cardType === "upcomming" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Upcomming Events
                </button>


                <button
                  onClick={() => {setTab("bookings"), setCardType("past")}}
                  className={` ${
                    cardType === "past" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Past Events
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
export default MyAccount;
