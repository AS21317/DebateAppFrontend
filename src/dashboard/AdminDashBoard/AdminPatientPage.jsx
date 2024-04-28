import React from 'react'
import SidebarComponent from './AdminSidebarPannel'
import useFetchData from '../../hooks/useFetchData'
import DoctorCard from './DoctorCard'
import PatientCard from './PatientCard'

const AdminPatientPage = () => {
  const {data:users,loading,error} = useFetchData(`${import.meta.env.VITE_BASE_URL}/api/v1/user`)
  console.log("Users available are : ",users)
  return (
    <>
  <div className="flex flex-grow ">
      {/* Sidebar */}
      <div className="w-64">
        <SidebarComponent />
      </div>

      <div className="flex flex-col flex-grow p-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-start items-start">
        {users.map((user)=><PatientCard key={user._id} user={user} />)}
        </div>
      </div>
    </div>

 </>
  )
}

export default AdminPatientPage