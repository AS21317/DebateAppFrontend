import React, { useState } from 'react'
import PastEventCard from './PastEventCard'
import TodaysEvent from './TodaysEvent'
import CancelledEvents from '../../dashboard/HostDashboard/CancelledEventsCardsHost'
import MissedEventCard from './MissedEventCard'
import UpcomingEventCard from './UpcomingEvents'
import useFetchData from '../../hooks/useFetchData'
import EventCard from '../../components/cards/EventCard'


const MyBookings = ({status,eventsData=[],userId}) => {
  
 

  

console.log("Passed event is ",eventsData)
console.log("card type is  :",status)
  return (
    <div>
          {/* {loading && !error && <Loader/>}

{error && !loading && <Error errMessage={error} />} */}


{



    
            status === "upcoming" ? <div className='flex flex-wrap gap-y-4  mt-4  justify-center sm:justify-between gap-x-5'>
                       {eventsData.map((event)=><EventCard event={event} role='dashBoarduser' />)}

            {/* <UpcomingEventCard/> */}
           
           
          </div>:status ==="past"?<div className='flex flex-wrap justify-between gap-x-5 gap-y-6'>
          {eventsData.map((eventData)=><EventCard event={eventData} />)}
             
            
           </div> :status ==="today"?<div className='flex justify-between flex-wrap gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><EventCard event={eventData} />)}

             
            
           </div>:status==="missed"?<div className='flex flex-wrap justify-between gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><EventCard event={eventData} />)}
             
            
           </div>:<div className='flex flex-wrap justify-between gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><EventCard event={eventData} />)}
             
            
           </div>
        }
    

   
 </div>
)}



export default MyBookings