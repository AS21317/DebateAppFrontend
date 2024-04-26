import React from 'react'
// import useFetchData from '../../hooks/useFetchData'
// import Loader from '../../Loader/Loader'
// import Error from '../../components/Error/Error'
// import EventCard from '../../components/cards/EventCard'
import CancelledEvents from '../../dashboard/HostDashboard/CancelledEvents'
import UpcommingEventsHost from './UpcommingEventsHost'
import CompletedEventHost from './CompletedEventHost'
import TodaysEventHost from './TodaysEventHost'
import useFetchData from '../../hooks/useFetchData'
import RequestedEventsHost from './RequestedEventsHost'


const MyBookingsHost
 = ({cardType}) => {
const {data:appointments , loading,error} = useFetchData(`${import.meta.env.VITE_BASE_URL}/api/v1/user/appointments/my-appointtments`)


  return (
    <div>
          {/* {loading && !error && <Loader/>}

{error && !loading && <Error errMessage={error} />} */}


{
 !loading && !error && (<div className=' flex justify-between mt-5  '>
    {
        // appointments.map((doctor)=>(
        //     // <DoctorCard doctor={doctor} key={doctor._id} />
         
        // ))
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

    </div>
  )
}

export default MyBookingsHost
