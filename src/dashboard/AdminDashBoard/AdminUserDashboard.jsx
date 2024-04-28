import React from "react";
import SidebarComponent from "./AdminSidebarPannel";
import MyAccount from "../../Pages/User-Page/MyAccount";

const AdminUserDashboard = () => {
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

export default AdminUserDashboard;
