import React from 'react'
import SidebarComponent from './SidebarComponent'
import MessageCard from './MessageCard'
import useFetchData from '../../hooks/useFetchData'

const AdminMessagePage = () => {
  const {data:messages,loading,error} = useFetchData(`https://medical-booking-backend.vercel.app/api/v1/contact`)
  console.log("Users available are : ",messages)

  return (
    <>
   <div className="flex flex-grow ">
      {/* Sidebar */}
      <div className="w-64">
        <SidebarComponent />
      </div>

      <div className="flex flex-col flex-grow p-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-start items-start">
       {messages.map((message)=><MessageCard key={message._id} messageInfo={message} />)}
      </div>
    </div>
    </div>
    

 </>  )
}

export default AdminMessagePage