import React from 'react'
import SidebarComponent from './AdminSidebarPannel'

const CreateHost = () => {
  return (
    <div className="flex flex-grow ">
      {/* Sidebar */}
      <div className="w-auto">
        <SidebarComponent />
      </div>

      <h1 className="mx-auto "> Admin Create Host Page</h1>
    </div>
  )
}

export default CreateHost