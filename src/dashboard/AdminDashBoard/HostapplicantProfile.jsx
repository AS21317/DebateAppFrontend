import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import debateImg from "../../assets/images/debate.jpg";
import Loader from "../../Loader/Loader";
import Error from "../../components/Error/Error";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import HostAbout from "../../Pages/HostPage/HostAbout";
import HostReviews from "../../Pages/HostPage/HostReviews";
import HostAreaOfIntrest from "../../Pages/HostPage/HostAreaOfIntrest";
import QuestionsCard from "../../components/cards/QuestionsCard";
import TakeResonCard from "../../components/cards/TakeResonCard";
import useFetchData from "../../hooks/useFetchData";
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

const HostapplicantProfile = () => {
  const [tab, setTab] = useState("about");
  const [showLoader,setShowLoader]= useState(false)
  const {token} = useContext(authContext)

  const { id } = useParams();  

 

  const {loading,error,data:applicationData} = useFetchData(`${import.meta.env.VITE_BASE_URL}/api/v1/hostApplication/${id}`)
//   console.log(applicationData,"application user")

  
 const handleAccept = async()=>{
        setShowLoader((true))
        try {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/registerHost/${id}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}` 
              },
              body: JSON.stringify(),
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
          
      
            console.log(result ,"Request data is here ");
            
      
      
            // if res found , 1. show a toast notification , 2. setLoading false
      
            setShowLoader(false);
            toast.success(result.message);
            Navigate('/admin/home')
          } catch (err) {
            toast.error(error.message);
            setShowLoader(false);
          }
        };
    
 
  const {expertise,user,applicationForm}= applicationData;
//   console.log("user",user)
//   console.log("applicationForm",applicationForm)
//   console.log("expertise",expertise)

  return (
    <section>
      {loading && <Loader />}
      {error && <Error />}
      {user && !loading && !error && <div className="max-w-[1170px] px-5 mx-auto">
        {
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex  gap-20">
                <div class="flex h-60 flex-col justify-between overflow-hidden">
                  <img src={debateImg} class=" h-full w-full object-cover " />
                </div>

                <div>
                  <div class="ml-4 text-center w-56">
                    <p class="text-slate-800 text-xl font-extrabold">
                      {user.name}
                    </p>
                    <p class="text-slate-700  font-semibold ">{user.email}</p>
                    {/* <p class="mt-1 bg-lime-300 w-fit mx-auto font-bold text-slate-900 py-1 px-2 rounded-[50px]">
                      Debate Experts
                    </p> */}
                  </div>

                  <div class="flex mt-6 space-x-2">
                    <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                      <p class="text-sm font-medium text-gray-500">Events</p>
                      <p class="text-3xl font-medium text-gray-600">{user.events.length}</p>
                    </div>
                    <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                      <p class="text-sm font-medium text-gray-500">Reviews</p>
                      <p class="text-3xl font-medium text-gray-600">{user.events.length}</p>
                    </div>
                    <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                      <p class="text-sm font-medium text-gray-500">Rating</p>
                      <p class="text-3xl font-medium text-gray-600">{user.averageRating}</p>
                    </div>
                    <div class=""></div>
                  </div>
                  <div className="flex justify-around  mb-5 mt-6">
                    {sociallinks.map((link, index) => (
                      <Link
                        to={link.path}
                        key={index}
                        className="w-9 h-9 border border-solid border-[#181A12] rounded-full flex items-center
    
     justify-center group hover:bg-primaryColor hover:border-none
    
    "
                      >
                        {link.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid Dborder-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>

                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Reviews
                </button>
                <button
                  onClick={() => setTab("intrest")}
                  className={`${
                    tab === "interest" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Area of Interest
                </button>

                <button
                  onClick={() => setTab("qna")}
                  className={`${
                    tab === "qna" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Answers
                </button>

                <button
                  onClick={() => setTab("expertise")}
                  className={`${
                    tab === "expertise" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Applied Field
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "about" && (
                  <p>{user.about}</p>
                )}

                {tab === "feedback" && <HostReviews reviews={user?.averageReview} />}
                {tab === "interest" && (
                    <div className="flex flex-wrap gap-1">
                        {areaOfInterests.map((interest) => {
                            return (
                            <span class="mt-1 bg-lime-300 w-fit font-bold text-slate-900 py-1 px-2 rounded-[50px]">
                                {interest}
                            </span>
                            );
                        })}
                    </div>
                )}

                {tab === "qna" && (
                    applicationForm.map(({question, answer}) => {
                        return <QuestionsCard question={question} answer={answer} />
                    })
                )}

                {tab === "expertise" && (
                   <div className="flex flex-wrap gap-1">
                   {expertise.map((interest) => {
                     return (
                       <span class="mt-1 bg-lime-300 w-fit font-bold text-slate-900 py-1 px-2 rounded-[50px]">
                         {interest}
                       </span>
                     );
                   })}
                 </div>
                )}
              </div>
            </div>

            <div className=" flex flex-col " >
                <button onClick={handleAccept} className="btn font-bold bg-green-600">{showLoader?<HashLoader size={25} color="white" />:"Accept"}</button>
                <button  onClick={() => document.getElementById('my_modal_1').showModal()}  className="btn font-bold bg-red-600">Reject</button>
            </div>
            <div className='flex justify-center'>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                    <TakeResonCard
                    />

                    <div className="modal-action">
                        <form method="dialog">
                        <button className="btn">Close</button>
                        </form>
                    </div>
                    </div>
                </dialog>
                </div>
            <div>
              
            </div>
          </div>
        }
      </div>}
    </section>
  );
}


export default HostapplicantProfile;
