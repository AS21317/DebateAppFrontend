import React, { useEffect } from "react";
import faq1 from "../../assets/images/faq1.png";
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

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

const ApplicantCard = ({ user,id,expertise = [], name = "", email="", noOfEvents=0, reviewsCt=0, rating=0, photo="" }) => {
  expertise = ["Debate", "GD"];
//   name = "Richard Hendricks";
//   email = "demo@gmail.com";
//   photo = faq1
console.log(user,"User here")
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

  return (
    <>
      <div class="mx-auto min-h-[280px] flex max-w-xs flex-col items-center rounded-xl border px-3 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
        <div class="">
          <div class="flex items-center">
            <img
              class="h-14 w-14 rounded-full object-cover"
              src={photo}
              alt="Simon Lewis"
            />

            <div class="ml-4 w-56">
              <p class="text-slate-800 text-xl font-extrabold">{name}</p>
              <p class="text-slate-500">{email}</p>
              <div className="flex flex-wrap gap-1">
                {expertise.map((interest) => {
                  return (
                    <span class="mt-1 bg-lime-300 w-fit font-bold text-slate-900 py-1 px-2 rounded-[50px]">
                      {interest}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div class="flex mt-6 space-x-2">
            <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p class="text-sm font-medium text-gray-500">Events</p>
              <p class="text-3xl font-medium text-gray-600">{noOfEvents}</p>
            </div>
            <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p class="text-sm font-medium text-gray-500">Reviews</p>
              <p class="text-3xl font-medium text-gray-600">{reviewsCt}</p>
            </div>
            <div class="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
              <p class="text-sm font-medium text-gray-500">Rating</p>
              <p class="text-3xl font-medium text-gray-600">{rating}</p>
            </div>
            <div class=""></div>
          </div>

          {/* Use this social media link later  */}
          {/* <div className="flex justify-around  mb-5 mt-6">
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
          </div> */}

          <hr className="h-1 my-2 bg-gray-500" />

          <Link
		   to={{
			pathname: `/admin/applicantProfile/${id}`,
			state: {userData:user}
		 }}
			
            class=" w-full text-center block mt-2 rounded-lg border-2 bg-blue-600 text-white px-4 py-2 font-semibold"
          >
            See Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default ApplicantCard;
