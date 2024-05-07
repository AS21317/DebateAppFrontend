import React from 'react'

import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from '../AdminDashBoard/Sidebar';




const ExpertSidePannel = ({role}) => {
  return (
    <Sidebar  >
          <SidebarItem icon={<LayoutDashboard size={20} />} text="User Dashboard" to="/expert/userDashboard"  />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="ExpertDasboard Dashboard" to="/expert/HostDashboard"  />
         
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" to="/host/calender" />
          <SidebarItem icon={<StickyNote size={20} />} text="Create Events" to="/host/createEvent" alert />

          {/* <SidebarItem icon={<Layers size={20} />} text="Tasks" to="/layers" />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" to="/reports" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" to="/setting" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help"  to="/help"/> */}
    </Sidebar>
  )
}

export default ExpertSidePannel