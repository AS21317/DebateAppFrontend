import React from "react";
import faq1 from "../../assets/images/faq1.png";
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";



const HostCard = ({hostData,role="Host"}) => {
  console.log("host data is ",hostData)
  const sociallinks = [
    {
      path: `${hostData.socials?.youtube || "#"}`,
      icon: <AiFillYoutube className="Mgroup-hover:text-white w-4 h-5" />,
    },
  
    {
      path: `${hostData.socials?.github || "#"}`,
      icon: <AiFillGithub className=" Mgroup-hover:text-white w-4 h-5" />,
    },
  
    {
      path: `${hostData.socials?.instagram || "#"}`,
      icon: <AiFillInstagram className="Mgroup-hover:text-white w-4 h-5" />,
    },
  
    {
      path: `${hostData.socials?.linkedin || "#"}`,
      icon: <RiLinkedinFill classame=" Mgroup-hover:text-white w-4 h-5" />,
    },
  ];

  return (
    <>
      <div class="w-fit mt-6 mx-auto h-fit bg-white shadow-lg   flex  flex-col items-center rounded-xl border px-3 py-4 text-center  md:flex-row md:items-start md:text-left">
        <div class="">
          <div class="flex items-center">
            <img
              class="h-14 w-14 rounded-full object-cover"
              src={hostData.user.photo || faq1}
              alt="Simon Lewis"
            />

            <div class="ml-4  w-56">
              <p class="text-slate-800 text-start text-xl font-extrabold">
                {hostData.user.name}
              </p>
              <p class="text-slate-500 text-start font-semibold">{role}</p>
             <div className="  flex  sm:justify-center md:justify-normal  flex-wrap gap-3">
             {hostData.expertise.length>0?hostData.expertise.map((expert)=><p class="mt-1 bg-lime-300 w-fit font-bold text-slate-900 py-1 px-2 rounded-[50px]">
                {expert}
              </p>):<p class="mt-1 bg-lime-300 w-fit font-bold text-slate-900 py-1 px-2 rounded-[50px]">
                GD
              </p>}
             </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center  gap-y-4 mt-6 space-x-2">
            <div class="flex flex-col items-center rounded-xl bg-gray-100 px-3 sm:px-4 py-2">
              <p class="text-sm font-medium text-gray-500">Events</p>
              <p class="text-[24px] font-medium text-gray-600">{hostData.events?.length || 21}</p>
            </div>
            <div class="flex flex-col items-center rounded-xl bg-gray-100 px-3 sm:px-4 py-2">
              <p class="text-sm font-medium text-gray-500">Reviews</p>
              <p class="text-[24px] font-medium text-gray-600">{hostData.events?.length || 14}</p>
            </div>
            <div class="flex flex-col items-center rounded-xl bg-gray-100 px-3 sm:px-4 py-2">
              <p class="text-sm font-medium text-gray-500">Rating</p>
              <p class="text-[24px] font-medium text-gray-600">{hostData.averageRating && hostData.averageRating>4?hostData.averageRating : 4.2}</p>
            </div>
            <div class=""></div>
          </div>

          <div className="flex flex-wrap  justify-evenly  mb-5 mt-6">
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
          <div class="flex justify-center space-x-2">
            <Link to={"/host/hostDetails"}>
              {" "}
              <button class="w-full rounded-lg border-2 bg-blue-600 text-white px-4 py-2 font-semibold">
                Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostCard;
