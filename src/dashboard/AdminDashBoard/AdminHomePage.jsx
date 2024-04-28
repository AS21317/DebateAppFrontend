import React from "react";
import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";
import featureImg from '../../assets/images/feature-img.png'
import videoIcon from '../../assets/images/video-icon.png'
import avatarIcon from '../../assets/images/avatar-icon.png'
import faqImg from '../../assets/images/faq-img.png'



import AdminSidebarPannel from "./AdminSidebarPannel";



const AdminHomePage = () => {
  return (
    <>
    <div className="flex flex-grow ">
    {/* Sidebar */}
    <div className="w-auto">
      <AdminSidebarPannel/>
    </div>

    <h1 className="mx-auto text-[24px] font-bold my-auto ">Welcome Admin Home Page </h1>
  </div>
    

 </>
  );
};

export default AdminHomePage;
