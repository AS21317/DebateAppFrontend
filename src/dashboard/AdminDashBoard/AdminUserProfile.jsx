import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import MyBookings from "../../Pages/User-Page/MyBookings";
import Profile from "../../Pages/User-Page/Profile";
import usegetProfile from "../../hooks/useFetchData";
import Loader from "../../Loader/Loader";

import userImg from "../../assets/images/doctor-img01.png";
import Error from "../../components/Error/Error";
import TakeResonCard from "../../components/cards/TakeResonCard";
import JoinHostCard from "../../components/cards/JoinHostCard";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";

const questions = [
  "Tell us about yourself",
  "Why do you want to join us as a host?",
  "Why we should choose you?",
];



const UserProfile
 = () => {
  const { dispatch, user: userData,token,  error } = useContext(authContext);
  const [answers,setAnswers]= useState([])
  const [loading,setLoading] = useState(false)
 

  const [tab, setTab] = useState("bookings");
  const [cardType, setCardType] = useState("upcomming");

  // TO handle modal opennings
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal = document.getElementById("my_modal_1");
      if (modal && event.target === modal) {
        modal.close();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleHostApplicationSubmit = async () => {

    const applicationForm = []
    questions.map((question, index) => {
      applicationForm.push({
        question, answer: answers[index]
      })
    })

    
    setLoading(true);
    console.log("Calling submit handler ")
    try {
      const res = await fetch(`http://192.168.1.11:5000/api/v1/hostApplication/create/${userData._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify(applicationForm),
      });

      


      const result = await res.json();
      
      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type:"LOGIN_SUCCESS",
        payload:{
          user:result.data,
          
          
        }
      });
    

      console.log(result ,"Request data is here ");
      


      // if res found , 1. show a toast notification , 2. setLoading false

      setLoading(false);
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };



  

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
              </div>

              <div className="flex mt-4 justify-between gap-2 px-8">
                <p className="flex-1  text-black-500 font-bold ">
                  Role:
                </p>
                <p className="font-semibold capitalize">{userData.role|| "user" } </p>
              </div>
             
              <div className="flex mt-4 justify-between gap-2 px-8">
                <p className="flex-1  text-black-500 font-bold ">Average Rating:</p>
                <p className="font-semibold">15()</p>
              </div>
              <div className="flex mt-4 justify-between gap-2 px-8">
                <p className="flex-1  text-black-500 font-bold ">Joined Whatapps </p>
                <p className="font-semibold">No</p>
              </div>
              <div className="flex mt-4 justify-between gap-2 px-8">
                <p className="flex-1  text-black-500 font-bold ">Applied for Host </p>
                <p className="font-semibold">No</p>
              </div>
              <div className="flex mt-4 justify-between gap-2 px-8">
                <p className="flex-1  text-black-500 font-bold ">
                  Total Debates:
                </p>
                <p className="font-semibold">5</p>
              </div>
            
              <div className="flex mt-4 justify-between gap-2 px-8">
                <p className="flex-1  text-black-500 font-bold ">Joined At:</p>
                <p className="font-semibold">15/11/2028</p>
              </div>
              <div className="flex mt-4 justify-between gap-2 px-8">
                <p className="flex-1  text-black-500 font-bold ">Total GD:</p>
                <p className="font-semibold">15</p>
              </div>

             
            </div>

            <div className="md:col-span-2 md:px-[30px] ml-4">
              <button
                onClick={() => {
                  setTab("settings"), setCardType("settings");
                }}
                className={`${
                  cardType === "settings" &&
                  "bg-primaryColor text-white font-normal"
                } py-2 mr-2 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Profile Info
              </button>

              <button
                onClick={() => {
                  setTab("bookings"), setCardType("upcomming");
                }}
                className={` ${
                  cardType === "upcomming" &&
                  "bg-primaryColor text-white font-normal"
                } p-2 mr-2 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Upcomming Events
              </button>

              <button
                onClick={() => {
                  setTab("bookings"), setCardType("past");
                }}
                className={` ${
                  cardType === "past" &&
                  "bg-primaryColor text-white font-normal"
                } p-2 mr-2 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Past Events
              </button>

              
              <button
                onClick={() => {
                  setTab("bookings"), setCardType("missed");
                }}
                className={` ${
                  cardType === "missed" &&
                  "bg-primaryColor text-white font-normal"
                } p-2 mr-2 px-5 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Missed Events
              </button>

              {tab === "bookings" ? (
                <MyBookings cardType={cardType} />
              ) : <Profile user={userData} disable={true} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default UserProfile
;
