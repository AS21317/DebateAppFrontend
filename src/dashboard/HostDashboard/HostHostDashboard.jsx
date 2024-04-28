import React from 'react'
import HostSidePannel from './HostSidePannel'
import MyAccount from '../../Pages/User-Page/MyAccount'
import HostAccount from './HostAccount'

const HostHostDashboard = () => {
  return (
    <div className="flex flex-grow ">
    {/* Sidebar */}
    <div className="w-auto">
      <HostSidePannel />
    </div>
    <HostAccount />{" "}
  </div>
  )
}

export default HostHostDashboard