import React from 'react'
import HostSidePannel from './HostSidePannel'
import MyAccount from '../../Pages/User-Page/MyAccount'

const ExpertUserDashboard = () => {
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

export default ExpertUserDashboard