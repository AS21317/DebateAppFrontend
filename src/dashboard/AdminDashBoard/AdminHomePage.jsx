import React from "react";
import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";
import featureImg from '../../assets/images/feature-img.png'
import videoIcon from '../../assets/images/video-icon.png'
import avatarIcon from '../../assets/images/avatar-icon.png'
import faqImg from '../../assets/images/faq-img.png'



import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../../components/About/About";
import ServiceList from "../../components/service/ServiceList";
import DoctorList from "../../components/Doctors/DoctorList";
import FaqList from "../../components/faq/FaqList";
import Testimonial from "../../components/Testtimonial/Testimonial"; 
import SidebarComponent from "./SidebarComponent";
import DoctorCard from "./DoctorCard";



const AdminHomePage = () => {
  return (
    <>
    <div className="flex flex-grow ">
      {/* Sidebar */}
      <div className="w-auto">
        <SidebarComponent />
      </div>

      <h1 className="mx-auto ">Welcome Admin Home</h1>
    </div>
    

 </>
  );
};

export default AdminHomePage;
