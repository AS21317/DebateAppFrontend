import React from 'react'
import SidebarComponent from './AdminSidebarPannel'

const AdminCalender = () => {
  return (
    <div className="flex flex-grow ">
      {/* Sidebar */}
      <div className="w-auto">
        <SidebarComponent />
      </div>

      <h1 className="mx-auto ">Welcome Admin Calander</h1>
    </div>
  )
}

export default AdminCalender