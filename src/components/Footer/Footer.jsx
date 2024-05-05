import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";

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

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "Guide",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const quickLinks02 = [
  { path: "/hosts", display: "Find a Host" },

  {
    path: "/events",
    display: "Find an Event",
  },
  {
    path: "/experts",
    display: "Find an Expert",
  },
];

const quickLinks03 = [
  {
    path: "/contact",
    display: "Give an Opinion",
  },
  {
    path: "/applyForExpert",
    display: "Request to become Expert",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" hero__section pb-14 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col items-center gap-y-12 lg:flex-row gap-[30px] xl:gap-[60px] ">
          <div className=" flex flex-col justify-center items-center">
            <img src={logo} width={"150px"} alt="" />

            <p className="text-[16px] text-center leading-7 w-[300px] font-[400] text-textColor mt-4">
              Copyright © {year} developed by Ashish Singh and Kavya Gupta all right reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {sociallinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1€] rounded-full flex items-center
    
     justify-center group hover:bg-primaryColor hover:border-none
    
    "
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

         <div className=" flex flex-wrap   gap-10 xl:gap-24 justify-center ">
         <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-3 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-3">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColox"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-3 text-headingColor">
              I want to
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-3">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColox"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-3 text-headingColor">
              Support Us
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-3">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 block w-[125px] font-[400] text-textColox"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
