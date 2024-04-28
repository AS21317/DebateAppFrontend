import React from 'react'
import EventCard from '../../components/cards/EventCard'
import HostReviews from '../../Pages/HostPage/HostReviews'
import HostDetails from '../../Pages/HostPage/HostDetails'
import MyAccount from '../../Pages/User-Page/MyAccount'
import EventType from './EventType'
import HostAccount from './HostAccount'
import HostSidePannel from './HostSidePannel'

const HostHomePage = () => {
    return (
        <>
           <div className="flex flex-grow ">
    {/* Sidebar */}
    <div className="w-auto">
      <HostSidePannel />
    </div>

    <h1 className="mx-auto font-bold text-[24px]  ">Welcome Host  Home Page</h1>
  </div>
        
    
     </>
    )
}

export default HostHomePage