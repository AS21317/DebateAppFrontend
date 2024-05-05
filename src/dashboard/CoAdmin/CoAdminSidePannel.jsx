import React from 'react'

import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from '../AdminDashBoard/Sidebar';




const CoAdminSidePannel = ({role}) => {
  return (
    <Sidebar className="" >
          <SidebarItem icon={<LayoutDashboard size={20} />} text="User Dashboard" to="/coAdmin/userDashboard"  />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Host Dashboard" to="/coAdmin/hostDashboard"  />
          {/* <SidebarItem icon={<LayoutDashboard size={20} />} text="Admin Dashboard" to="/admin/adminDashboard"  /> */}
          <SidebarItem icon={<StickyNote size={20} />} text="Give Permission" to="/admin/givePermission" alert />
         
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" to="/admin/calender" />
          <SidebarItem icon={<StickyNote size={20} />} text="Create Event" to="/admin/createEvent" alert />

          {/* <SidebarItem icon={<Layers size={20} />} text="Tasks" to="/layers" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" to="/reports" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" to="/setting" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help"  to="/help"/> */}
    </Sidebar>
  )
}

export default CoAdminSidePannel