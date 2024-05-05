import React from 'react'
import SidebarComponent from './CoAdminSidePannel'
import HostAccount from '../HostDashboard/HostAccount'

const CoAdminHostDashboard = () => {
  return (
    <div className="flex flex-grow ">
      {/* Sidebar */}
      <div className="w-auto">
        <SidebarComponent />
      </div>

      <h1 className="mx-auto "><HostAccount/></h1>
    </div>
  )
}

export default CoAdminHostDashboard