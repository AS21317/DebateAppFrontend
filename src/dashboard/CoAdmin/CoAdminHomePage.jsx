import React from 'react'
import CoAdminSidePannel from './CoAdminSidePannel'

const CoAdminHomePage = () => {
  return (
    <div className="flex flex-grow ">
      {/* Sidebar */}
      <div className="w-auto">
        <CoAdminSidePannel />
      </div>

      <h1 className="mx-auto ">Welcome Co-Admin  Home Page</h1>
    </div>
  )
}

export default CoAdminHomePage