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


const MyBookingsHost
 = ({status,eventsData}) => {

  console.log("card is :",status);
  return (
    <div>
          {/* {loading && !error && <Loader/>}

{error && !loading && <Error errMessage={error} />} */}


{
 
// future , today


    
            status === "upcoming" ? <div className='flex flex-wrap gap-y-4   justify-between gap-x-5'>
           {eventsData.map((eventData)=><upcomingEventsHost eventData={eventData} />)}
           
          </div>:status ==="completed"?<div className='flex flex-wrap justify-between gap-x-5 gap-y-6'>
          {eventsData.map((eventData)=><CompletedEventHost eventData={eventData} />)}

             
             
            
           </div> :status ==="today"?<div className='flex justify-between flex-wrap gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><TodaysEventHost eventData={eventData} />)}

            

             
            
           </div>:status==="pending"?<div className='flex flex-wrap justify-between gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><RequestedEventsHost eventData={eventData} />)}

           
             
            
           </div>:<div className='flex flex-wrap justify-between gap-x-5 gap-y-4'>
           {eventsData.map((eventData)=><CancelledEvents eventData={eventData} />)}

             
            
           </div>
        }
    

   
 </div>
)}

  

export default MyBookingsHost
