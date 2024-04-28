import React from 'react'
import SidebarComponent from './AdminSidebarPannel'
import HostAccount from '../HostDashboard/HostAccount'

const AdminHostDashboard = () => {
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

export default AdminHostDashboard