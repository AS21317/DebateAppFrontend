import React from 'react'
import UpcommingEventCard from './UpcomingEvents'
import PastEventCard from './PastEventCard'
import TodaysEvent from './TodaysEvent'
import CancelledEvents from '../../dashboard/HostDashboard/CancelledEventsCardsHost'
import MissedEventCard from './MissedEventCard'


const MyBookings = ({status,eventsData=[]}) => {

  


console.log("card type is  :",status)
  return (
    <div>
          {/* {loading && !error && <Loader/>}

{error && !loading && <Error errMessage={error} />} */}


{



    
            status === "upcoming" ? <div className='flex flex-wrap gap-y-4  mt-4  justify-between gap-x-5'>
                       {eventsData.map((eventData)=><UpcommingEventCard eventData={eventData} />)}

            
           
           
          </div>:status ==="past"?<div className='flex flex-wrap justify-between gap-x-5 gap-y-6'>
          {eventsData.map((eventData)=><PastEventCard eventData={eventData} />)}
             
            
           </div> :status ==="today"?<div className='flex justify-between flex-wrap gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><TodaysEvent eventData={eventData} />)}

             
            
           </div>:status==="missed"?<div className='flex flex-wrap justify-between gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><MissedEventCard eventData={eventData} />)}
             
            
           </div>:<div className='flex flex-wrap justify-between gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><CancelledEvents eventData={eventData} />)}
             
            
           </div>
        }
    

   
 </div>
)}



export default MyBookings