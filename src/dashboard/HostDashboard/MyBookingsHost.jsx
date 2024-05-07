import React from 'react'
// import useFetchData from '../../hooks/useFetchData'
// import Loader from '../../Loader/Loader'
// import Error from '../../components/Error/Error'
// import EventCard from '../../components/cards/EventCard'
import CancelledEvents from './CancelledEventsCardsHost'
import upcomingEventsHost from './upcomingEventsCardHost'
import CompletedEventHost from './CompletedEventCardHost'
import TodaysEventHost from './TodaysEventHost'
import useFetchData from '../../hooks/useFetchData'
import RequestedEventsHost from './RequestedEventsHost'
import UpcomingEventCard from '../../Pages/User-Page/UpcomingEvents'
import EventCard from '../../components/cards/EventCard'


const MyBookingsHost
 = ({status,eventsData}) => {

  console.log("card is :",status);
  console.log("Events are :",eventsData);
  return (
    <div>
          {/* {loading && !error && <Loader/>}

{error && !loading && <Error errMessage={error} />} */}


{
 
// future , today


    
            status === "upcoming" ? <div className='flex flex-wrap gap-y-4   justify-evenly gap-x-5'>
           {eventsData.map((eventData)=><EventCard role={"host"} event={eventData} />)}
           
          </div>:status ==="completed"?<div className='flex flex-wrap justify-evenly gap-x-5 gap-y-6'>
          {eventsData.map((eventData)=><EventCard role={"host"} event={eventData} />)}

             
             
            
           </div> :status ==="today"?<div className='flex justify-evenly flex-wrap gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><EventCard role={"host"} event={eventData} />)}
            

             
            
           </div>:status==="pending"?<div className='flex flex-wrap justify-evenly gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><EventCard role={"requestedByAdmin"} event={eventData} />)}

           
             
            
           </div>:status==="requestedByAdmin"?
           
           <div className='flex flex-wrap justify-evenly gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><EventCard role={"requestedByAdmin"} event={eventData} />)}</div>
           
           :status==="requestedToAdmin"?
           
           <div className='flex flex-wrap justify-evenly gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><EventCard role={"requestedByAdmin"} event={eventData} />)}</div>:<div className='flex flex-wrap justify-evenly gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><EventCard role={"cancelled"} event={eventData} />)}

             
            
           </div>
        }
    

   
 </div>
)}

  

export default MyBookingsHost
