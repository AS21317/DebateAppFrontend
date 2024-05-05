import React from 'react'

import Sidebar, { SidebarItem } from "./Sidebar";
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";




const AdminSidebarPannel = ({role}) => {
  return (
    <Sidebar className="" >
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Event" to="/admin/allEvents"  />

          <SidebarItem icon={<LayoutDashboard size={20} />} text="User Dashboard" to="/admin/userDashboard"  />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Host Dashboard" to="/admin/hostDashboard"  />
          {/* <SidebarItem icon={<LayoutDashboard size={20} />} text="Admin Dashboard" to="/admin/adminDashboard"  /> */}
          <SidebarItem icon={<StickyNote size={20} />} text="All Users" to="/admin/allUsers" alert />
         
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" to="/admin/calender" />
          <SidebarItem icon={<StickyNote size={20} />} text="Create Event" to="/admin/createEvent" alert />
          <SidebarItem icon={<StickyNote size={20} />} text="Create Topic" to="/admin/createTopic" alert />
          <SidebarItem icon={<StickyNote size={20} />} text="Host Applications" to="/admin/hostApplications" alert />
          <SidebarItem icon={<StickyNote size={20} />} text="Expert Applications" to="/admin/expertApplications" alert />

          {/* <SidebarItem icon={<Layers size={20} />} text="Tasks" to="/layers" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" to="/reports" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" to="/setting" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help"  to="/help"/> */}
    </Sidebar>
  )
}

export default AdminSidebarPannel