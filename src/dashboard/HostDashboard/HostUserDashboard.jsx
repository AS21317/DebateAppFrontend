import React from 'react'
import HostSidePannel from './HostSidePannel'
import MyAccount from '../../Pages/User-Page/MyAccount'

const HostUserDashboard = () => {
  return (
    <div className="flex flex-grow ">
      {/* Sidebar */}
      <div className="w-auto">
        <HostSidePannel />
      </div>
      <MyAccount />{" "}
    </div>
  )
}

export default HostUserDashboard