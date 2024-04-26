import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import starIcon from "../../assets/images/Star.png";
import debateImg from "../../assets/images/debate.jpg";
import DoctorAbout from "../Doctors/DoctorAbout";
import Feedback from "../Doctors/Feedback";
import SidePannel from "../Doctors/SidePannel";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../Loader/Loader";
import Error from "../../components/Error/Error";
import { useParams } from "react-router-dom";
import { useState } from "react";
import HostAbout from "./HostAbout";
import HostReviews from "./HostReviews";
import HostAreaOfIntrest from "./HostAreaOfIntrest";

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

const HostDetails = () => {
  const [tab, setTab] = useState("about");

  const data = {
    name: "",
    about: "",
    qualification: "",
    areaOfIntrest: "",
    reviews: "",
    experience: "",
  };
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
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
                      Richard Hendricks
                    </p>
                    <p class="text-slate-700  font-semibold ">demo@gmail.com</p>
                    <p class="mt-1 bg-lime-300 w-fit mx-auto font-bold text-slate-900 py-1 px-2 rounded-[50px]">
                      Debate Experts
                    </p>
                  </div>

                  <div class="flex mt-6 space-x-2">
                    <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                      <p class="text-sm font-medium text-gray-500">Events</p>
                      <p class="text-3xl font-medium text-gray-600">23</p>
                    </div>
                    <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                      <p class="text-sm font-medium text-gray-500">Reviews</p>
                      <p class="text-3xl font-medium text-gray-600">7</p>
                    </div>
                    <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                      <p class="text-sm font-medium text-gray-500">Rating</p>
                      <p class="text-3xl font-medium text-gray-600">4.5</p>
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
                    tab === "intrest" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Area of Intrest
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "about" && (
                  <HostAbout
                    name={data.name}
                    about={data.about}
                    qualifications={data.qualification}
                    experience={data.experience}
                  />
                )}

                {tab === "feedback" && <HostReviews reviews={data.reviews} />}
                {tab === "intrest" && (
                  <HostAreaOfIntrest areaOfIntrest={data.areaOfIntrest} />
                )}
              </div>
            </div>
            <div>
              <SidePannel />{" "}
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default HostDetails;
