import React from "react";
import SidebarComponent from "./CoAdminSidePannel";
import MyAccount from "../../Pages/User-Page/MyAccount";

const CoAdminUserDashboard = () => {
  return (
    <div className="flex flex-grow ">
      {/* Sidebar */}
      <div className="w-auto">
        <SidebarComponent />
      </div>
      <MyAccount />{" "}
    </div>
  );
};

export default CoAdminUserDashboard;
