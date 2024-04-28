import React, { useEffect, useState } from "react";
import { useContext } from "react";


import userImg from "../../assets/images/doctor-img01.png";
import { authContext } from "../../context/AuthContext";
import { Loader } from "lucide-react";
import MyBookings from "../../Pages/User-Page/MyBookings";
import Profile from "../doctor-account/Profile";
import usegetProfile from '../../hooks/useFetchData'
import { useNavigate } from "react-router-dom";
import MyBookingsHost from "./MyBookingsHost";
import { Navigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
const HostAccount = () => {
  const {user,token,role}  =useContext(authContext)
  const [eventsData, setEventsData]= useState([])
  const [showLoader,setShowLoader] = useState(false)





  const { dispatch ,user:userData,loading,error} = useContext(authContext);
  const [tab, setTab] = useState("bookings");
 const [cardType, setCardType]= useState("today")

  const navigate = useNavigate()
  console.log("user is ",userData)

  console.log(userData, "Data is ");

  const handleLogout = () => {
    
    dispatch({ type: "LOGOUT" });
    navigate('/home')
  };

  const eventHandler = (status)=>{
    setShowLoader(true)
    try {
        const res = await fetch(`http://192.168.1.11:5000/api/v1/events/getByHostAndStatus`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify({status:status,userId:userData._id}),
        
        });

        


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
    

        console.log(result ,"Request Event   is here ");

        


        // if res found , 1. show a toast notification , 2. setShowLoader false

        setShowLoader(false);
        setEventsData(result.data)
        toast.success(result.message);
        // Navigate('/admin/home')
    } catch (err) {
        toast.error(err.message);
        setShowLoader(false);
    }

  }

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {showLoader && !error && <HashLoader size={45} color="red" />}

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
              Role
            </p>
            <p className='font-semibold capitalize'>{userData.role}</p>
          </div>
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
              Avg Rating:
            </p>
            <p className='font-semibold'>4.5</p>
          </div>
               </div>
        

              <div className="mt-[30px] md:mt-[50px] ">

              <button
                  onClick={()=>{setTab("bookings"),setCardType("pending"), eventHandler("pending")}}
                  className="w-full bg-[#8e8821] p-3 font-semibold  mt-4 text-[16px] leading-7 rounded-md text-white"
                >
                  Requested Events { " "} (2)
                </button>

                <button
                  onClick={()=>{setTab("profile"),setCardType("")}}
                  className="w-full bg-[#6060cd] p-3 font-semibold mt-4 text-[16px] leading-7 rounded-md text-white"
                >
                  Profile Details
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
                  onClick={() => {setTab("bookings") , setCardType("today"),}}
                  className={` ${
                    cardType === "today" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-4 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Today Events
                </button>


                <button
                  onClick={() => {setTab("bookings") , setCardType("upcomming")}}
                  className={` ${
                    cardType === "upcomming" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Future Events
                </button>

                <button
                onClick={() => {setTab("bookings") , setCardType("completed")}}
                  className={` ${
                    cardType === "completed" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Past Events
                </button>


                <button
                  onClick={() => {setTab("bookings"), setCardType("canceled")}}
                  className={` ${
                    cardType === "canceled" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Canceled Events
                </button>
                
                
                
             

              {tab === "bookings" ? (
                <MyBookingsHost cardType={cardType} />
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
export default HostAccount;
