import React from 'react'
import SidebarComponent from './AdminSidebarPannel'
import Profile from '../../Pages/User-Page/Profile'

const CreateCoAdmin = () => {
  return (
    <div className="flex flex-grow ">
      {/* Sidebar */}
      <div className="w-auto">
        <SidebarComponent />
      </div>

    
    </div>
  )
}

export default CreateCoAdmin