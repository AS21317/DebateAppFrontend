import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Loader from '../../Loader/Loader'
import Error from '../../components/Error/Error'
import EventCard from '../../components/cards/EventCard'
import UpcommingEventCard from './UpcomingEvents'
import PastEventCard from './PastEventCard'
import TodaysEvent from './TodaysEvent'
import CancelledEvents from '../../dashboard/HostDashboard/CancelledEvents'


const MyBookings = ({cardType}) => {
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


    
            cardType === "upcomming" ? <div className='flex flex-wrap gap-y-4   justify-between gap-x-5'>
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

export default MyBookings