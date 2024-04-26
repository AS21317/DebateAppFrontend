import React from 'react'
import SidebarComponent from '../AdminDashBoard/SidebarComponent'
import EventCard from '../../components/cards/EventCard'
import HostReviews from '../../Pages/HostPage/HostReviews'
import HostDetails from '../../Pages/HostPage/HostDetails'
import MyAccount from '../../Pages/User-Page/MyAccount'
import EventType from './EventType'
import HostAccount from './HostAccount'

const HostHomePage = () => {
    return (
        <>
        <div className="flex flex-grow ">
          {/* Sidebar */}
          <div className="w-auto">
            <SidebarComponent />
          </div>
    
           
            <HostAccount/>
        </div>
        
    
     </>
    )
}

export default HostHomePage