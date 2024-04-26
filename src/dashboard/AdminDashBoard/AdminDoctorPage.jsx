import React from 'react'
import SidebarComponent from './SidebarComponent'
import DoctorCard from './DoctorCard'
import useFetchData from '../../hooks/useFetchData'

const AdminDoctorPage = () => {
  const {data:doctors,loading,error} = useFetchData(`${import.meta.env.VITE_BASE_URL}/api/v1/doctor`)
  console.log("Doctors available are : ",doctors)
  return (
    <>
  <div className="flex flex-grow ">
      {/* Sidebar */}
      <div className="w-64">
        <SidebarComponent />
      </div>

      <div className="flex flex-col flex-grow p-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-start items-start">
        {doctors.map((doctor)=><DoctorCard key={doctor._id} doctor={doctor} />)}
        </div>
      </div>
    </div>

 </>
  )
}

export default AdminDoctorPage