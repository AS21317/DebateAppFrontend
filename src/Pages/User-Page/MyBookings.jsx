import React from 'react'
import UpcommingEventCard from './UpcomingEvents'
import PastEventCard from './PastEventCard'
import TodaysEvent from './TodaysEvent'
import CancelledEvents from '../../dashboard/HostDashboard/CancelledEventsCardsHost'
import MissedEventCard from './MissedEventCard'


const MyBookings = ({cardType}) => {

console.log("card type is  :",cardType)
  return (
    <div>
          {/* {loading && !error && <Loader/>}

{error && !loading && <Error errMessage={error} />} */}


{



    
            cardType === "upcomming" ? <div className='flex flex-wrap gap-y-4  mt-4  justify-between gap-x-5'>
            <UpcommingEventCard/>
            
            <UpcommingEventCard/>
            <UpcommingEventCard/>
            <UpcommingEventCard/>
           
          </div>:cardType ==="past"?<div className='flex flex-wrap justify-between gap-x-5 gap-y-6'>
             <PastEventCard/>
             <PastEventCard/>
             <PastEventCard/>
             <PastEventCard/>
             
            
           </div> :cardType ==="today"?<div className='flex justify-between flex-wrap gap-x-5 gap-y-4'>
             <TodaysEvent/>
             <TodaysEvent/>
             <TodaysEvent/>
             <TodaysEvent/>

             
            
           </div>:cardType==="missed"?<div className='flex flex-wrap justify-between gap-x-5 gap-y-4'>
             <MissedEventCard/>
             <MissedEventCard/>
             <MissedEventCard/>
             <MissedEventCard/>
             
            
           </div>:<div className='flex flex-wrap justify-between gap-x-5 gap-y-4'>
             <CancelledEvents/>
             <CancelledEvents/>
             <CancelledEvents/>
             <CancelledEvents/>
             
            
           </div>
        }
    

   
 </div>
)}



export default MyBookings