import React from 'react'

import Sidebar, { SidebarItem } from "./Sidebar";
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";




const SidebarComponent = () => {
  return (
    <Sidebar className="" >
    <SidebarItem icon={<Home size={20} />} text="Home" alert />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/dashboard" active />
          <SidebarItem icon={<StickyNote size={20} />} text="Projects" to="/notes" alert />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" to="/calender" />
          <SidebarItem icon={<Layers size={20} />} text="Tasks" to="/layers" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" to="/reports" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" to="/setting" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help"  to="/help"/>
    </Sidebar>
  )
}

export default SidebarComponent