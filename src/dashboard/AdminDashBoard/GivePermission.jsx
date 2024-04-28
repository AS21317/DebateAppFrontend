import React from 'react'
import SidebarComponent from './AdminSidebarPannel'
import HostCard from '../../components/cards/HostCard'
import AdminUserCards from '../../components/cards/AdminUserCards'

const GivePermission = () => {
  return (
    <div className="flex flex-grow ">
    {/* Sidebar */}
    <div className="w-auto">
      <SidebarComponent />
    </div>

    <div className="flex flex-col flex-grow m-6 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-start items-start">
        {/* {doctors.map((doctor)=><DoctorCard key={doctor._id} doctor={doctor} />)} */}
        <AdminUserCards/>
        <AdminUserCards/>
        <AdminUserCards/>
        <AdminUserCards/>
        <AdminUserCards/>
       
        </div>
      </div>
  </div>
  
  )
}

export default GivePermission