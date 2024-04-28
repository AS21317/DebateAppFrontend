import React from 'react'
import AdminSidebarPannel from './AdminSidebarPannel'

const AdminExpertPage = () => {
  return (
    <div className="flex flex-grow ">
    {/* Sidebar */}
    <div className="w-auto">
      <AdminSidebarPannel />
    </div>

    <h1 className="mx-auto text-[24px] font-bold my-auto ">Welcome Admin Page For Experts</h1>
  </div>
  )
}

export default AdminExpertPage