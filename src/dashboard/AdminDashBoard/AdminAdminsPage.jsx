import React from 'react'
import AdminSidebarPannel from './AdminSidebarPannel'

const AdminAdminsPage = () => {
  return (
    <div className="flex flex-grow ">
    {/* Sidebar */}
    <div className="w-auto">
      <AdminSidebarPannel/>
    </div>

    <h1 className="mx-auto text-[24px] font-bold my-auto ">Welcome Admin Page of Admins</h1>
  </div>
  )
}

export default AdminAdminsPage