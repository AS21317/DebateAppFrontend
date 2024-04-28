import React from 'react'
// import useFetchData from '../../hooks/useFetchData'
// import Loader from '../../Loader/Loader'
// import Error from '../../components/Error/Error'
// import EventCard from '../../components/cards/EventCard'
import CancelledEvents from './CancelledEventsCardsHost'
import UpcommingEventsHost from './UpcommingEventsCardHost'
import CompletedEventHost from './CompletedEventCardHost'
import TodaysEventHost from './TodaysEventHost'
import useFetchData from '../../hooks/useFetchData'
import RequestedEventsHost from './RequestedEventsHost'


const MyBookingsHost
 = ({cardType}) => {

  console.log("card is :",cardType);
  return (
    <div>
          {/* {loading && !error && <Loader/>}

{error && !loading && <Error errMessage={error} />} */}


{
 
// future , today


    
            cardType === "future" ? <div className='flex flex-wrap gap-y-4   justify-between gap-x-5'>
            <UpcommingEventsHost/>
            <UpcommingEventsHost/>
            <UpcommingEventsHost/>
            <UpcommingEventsHost/>
           
          </div>:cardType ==="past"?<div className='flex flex-wrap justify-between gap-x-5 gap-y-6'>
             <CompletedEventHost/>
             <CompletedEventHost/>
             <CompletedEventHost/>
             <CompletedEventHost/>
             
             
            
           </div> :cardType ==="today"?<div className='flex justify-between flex-wrap gap-x-5 gap-y-4'>
             <TodaysEventHost/>
             <TodaysEventHost/>
             <TodaysEventHost/>
            

             
            
           </div>:cardType==="requested"?<div className='flex flex-wrap justify-between gap-x-5 gap-y-4'>
             <RequestedEventsHost/>
             <RequestedEventsHost/>
             <RequestedEventsHost/>
             <RequestedEventsHost/>
           
             
            
           </div>:<div className='flex flex-wrap justify-between gap-x-5 gap-y-4'>
             <CancelledEvents/>
             <CancelledEvents/>
             <CancelledEvents/>
             <CancelledEvents/>
             
            
           </div>
        }
    

   
 </div>
)}

  

export default MyBookingsHost
