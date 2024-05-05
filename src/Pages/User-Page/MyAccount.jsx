import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import usegetProfile from "../../hooks/useFetchData";
import Loader from "../../Loader/Loader";

import userImg from "../../assets/images/doctor-img01.png";
import Error from "../../components/Error/Error";
import TakeResonCard from "../../components/cards/TakeResonCard";
import JoinHostCard from "../../components/cards/JoinHostCard";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const questions = [
  "Tell us about yourself",
  "Why do you want to join us as a host?",
  "Why we should choose you?",
];

const MyAccount = () => {
  const { dispatch, user: userData, token, error } = useContext(authContext);
  const [answers, setAnswers] = useState([]);
  const [eventsData ,setEventsData] = useState([])
  const [eventLoading, seteventLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expertise, setExpertise] = useState(["Debate", "GD", "ExpertTalk"]);

  const [tab, setTab] = useState("bookings");
  const [cardType, setCardType] = useState("upcoming");
  const navigate = useNavigate()

  // TO handle modal opennings
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal1 = document.getElementById("my_modal_1");
      const modal2 = document.getElementById("my_modal_2");
      if (modal1 && event.target === modal1) {
        modal1.close();
      }
      if (modal2 && event.target === modal2) {
        modal2.close();
      }
    };



    document.addEventListener("click", handleOutsideClick);
    eventHandler("Upcoming")

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);


// function to fetch all kind of event by status for a user
  const eventHandler = async (status)=>{
    console.log("first")
    seteventLoading(true)
    try {
      console.log("calling this ")
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/user/get${status}Events/${userData._id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` 
            },
          
        
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
    

        console.log(result ,`Request ${status}  Event   is here `);
        

        


        // if res found , 1. show a toast notification , 2. setShowLoader false

        
        seteventLoading(false)
        setEventsData(result.data)
        // toast.success(result.message);
        // Navigate('/admin/home')
    } catch (err) {
        // toast.error(err.message);
        seteventLoading(false)
    }

  }



 
  const handleHostApplicationSubmit = async () => {
    const applicationForm = [];
    questions.map((question, index) => {
      applicationForm.push({
        question,
        answer: answers[index],
      });
    });

    console.log("Application Form data is :",applicationForm,expertise)

    setLoading(true);
    console.log("Calling submit handler ");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/hostApplication/create/${userData._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({applicationForm,expertise}),
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

      console.log(result, "Request data is here ");

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
    navigate('/home')
  };

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}

        {error && !loading && <Error errMessage={error} />}
        {!loading && !error && (
          <div className=" sm:grid md:grid-cols-3 gap-10">
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
                <p className="flex-1  text-black-500 font-bold ">Role:</p>
                <p className="font-semibold capitalize">{userData.role}</p>
              </div>
              <div className="flex mt-4 justify-between gap-2 px-8">
                <p className="flex-1  text-black-500 font-bold ">
                  Total Debates:
                </p>
                <p className="font-semibold">5</p>
              </div>
              <div className="flex mt-4 justify-between gap-2 px-8">
                <p className="flex-1  text-black-500 font-bold ">Total GD:</p>
                <p className="font-semibold">15</p>
              </div>

              <div className="mt-[30px] md:mt-[50px]  ">
              <button
                onClick={() => {
                  setTab("settings"), setCardType("settings");
                }}
                className={`${
                  cardType === "settings" &&
                  "bg-primaryColor text-white font-normal"
                } py-2 mr-3 px-3 w-full rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Profile Settings
              </button>
                {userData.role !== "host" && (
                  <button
                    onClick={() =>
                     {!userData.appliedForHost && document.getElementById("my_modal_2").showModal()}
                    }
                    className="w-full bg-[#abb10b] font-semibold mt-4 p-3 text-[16px] leading-7 rounded-md text-white"
                  >
                    {!userData?.appliedForHost ? (
                      !loading ? (
                        "Join us as a host"
                      ) : (
                        <HashLoader size={25} color="white" />
                      )
                    ) : (
                      "Pending"
                    )}
                  </button>
                )}
                {/* Modal section */}
                <div className="flex justify-center ">
                  <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                      {questions.map((question, index) => (
                        <JoinHostCard
                          question={question}
                          answer={answers[index]}
                          handleChange={(e) => {
                            const ans = [...answers];
                            ans[index] = e.target.value;
                            setAnswers(ans);
                          }}
                        />
                      ))}

                      <div className=" bg-[#e7eb99] rounded-xl mt-4 p-4">
                        <h1 className=" font-semibold ">
                          Select Your Expertise:{" "}
                        </h1>
                        <div className=" flex justify-between mt-4">
                          <div className="">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={expertise.includes("Debate")}
                                onChange={() => {
                                  if (expertise.includes("Debate")) {
                                    setExpertise(
                                      expertise.filter(
                                        (item) => item !== "Debate"
                                      )
                                    );
                                  } else {
                                    setExpertise([...expertise, "Debate"]);
                                  }
                                }}
                                className="h-6 w-6"
                              />
                              <span className="text-lg font-medium">
                                Debate
                              </span>
                            </label>
                          </div>
                          <div className="">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={expertise.includes("GD")}
                                onChange={() => {
                                  if (expertise.includes("GD")) {
                                    setExpertise(
                                      expertise.filter((item) => item !== "GD")
                                    );
                                  } else {
                                    setExpertise([...expertise, "GD"]);
                                  }
                                }}
                                className="h-6 w-6"
                              />
                              <span className="text-lg font-medium ">GD</span>
                            </label>
                          </div>
                          <div className="">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={expertise.includes("ExpertTalk")}
                                onChange={() => {
                                  if (expertise.includes("ExpertTalk")) {
                                    setExpertise(
                                      expertise.filter(
                                        (item) => item !== "ExpertTalk"
                                      )
                                    );
                                  } else {
                                    setExpertise([...expertise, "ExpertTalk"]);
                                  }
                                }}
                                className="h-6 w-6"
                              />
                              <span className="text-lg font-medium">
                                Expert Talk
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="modal-action flex justify-between">
                        <form method="dialog" className="">
                          <button className="btn bg-red-600">Cancel</button>
                        </form>
                        <form method="dialog" className="">
                          <button
                            onClick={handleHostApplicationSubmit}
                            className="btn bg-blue-600 font-bold"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>

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

            <div className="md:col-span-2 gap-y-5 md:px-[30px] ml-4">
              

           <div className=" flex flex-wrap justify-center gap-y-4 ">
           <button
                onClick={() => {
                  setTab("bookings"), setCardType("upcoming"),eventHandler("Upcoming")
                }}
                className={` ${
                  cardType === "upcoming" &&
                  "bg-primaryColor text-white font-normal"
                } sm:p-2 sm:mr-3 min-w-[150px] sm:w-fit sm:px-3 mr-3  px-3 py-3 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Upcoming Events
              </button>

              <button
                onClick={() => {
                  setTab("bookings"), setCardType("completed"),eventHandler("Completed")
                }}
                className={` ${
                  cardType === "completed" &&
                  "bg-primaryColor text-white font-normal"
                }sm:p-2 sm:mr-3 min-w-[150px] sm:w-fit sm:px-3 mr-3 px-3 py-3 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Past Events
              </button>

              <button
                onClick={() => {
                  setTab("bookings"), setCardType("missed"),eventHandler("Missed")
                }}
                className={` ${
                  cardType === "missed" &&
                  "bg-primaryColor text-white font-normal"
                } sm:p-2 sm:mr-3 min-w-[150px] sm:w-fit sm:px-3 mr-3 px-3 py-3 rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Missed Events
              </button>

              <button
                onClick={() => {
                  setTab("bookings"), setCardType("cancelled"),eventHandler("cancelled");
                }}
                className={`${
                  cardType === "cancelled" &&
                  "bg-primaryColor text-white font-normal"
                } sm:p-2 sm:mr-3 min-w-[150px] sm:w-fit sm:px-3 mr-3 px-3 py-3  rounded-md text-headingColor
font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
              >
                Canceled Events
              </button>
           </div>
                {
                  !eventLoading && eventsData.length ===0 && (<div className=" flex justify-center items-center h-full font-bold capitalize font-serif text-2xl"><p>{`You have no ${cardType} Events `} </p></div>)
                }
              {tab === "bookings" ? ( eventLoading ?<div className=" flex mt-10 justify-center items-center"><HashLoader size={35} color="black" /></div>:
                <MyBookings eventsData={eventsData} status={cardType} />
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
