import React from 'react'
import climate1 from '../../assets/images/climate1.jpg'
import { Link } from 'react-router-dom'
import ShortHostCard from './ShortHostCard'

const AdminEventCard = ({eventData}) => {
  return (
    <>
    <div class=" rounded-lg min-w-[300px] group-hover:scale-110 shadow-2xl ">
      <div class="py-4">
        <h3 className='font-bold text-[20px]   text-center py-2 w-full   mb-4 text-[#00246B] bg-lime-300  ' >{eventData.topic.name}</h3>

       
      <div className="flex  gap-2 px-4">
            <p className="flex-1 text-black-500   font-bold ">
              Type: 
            </p>
            <p className='text-red-600 capitalize  font-bold text-[20px] '>{eventData.type}</p>
          </div>
         

         

          <div className="flex gap-2 px-4">
            <p className="flex-1  text-black-500 font-bold ">
              Date: 
            </p>
            <p className='font-semibold'>{eventData.startDate}</p>
          </div>

          <div className="flex gap-2 px-4">
            <p className="flex-1  text-black-500 font-bold ">
              Time: 
            </p>
            <p className='font-semibold'>{eventData.startTime}</p>
          </div>

          <div className="flex gap-2 px-4">
            <p className="flex-1  text-black-500 font-bold ">
              Total Seats: 
            </p>
            <p className='font-semibold'>{eventData.maxAttendees}</p>
          </div>

          <div className="flex gap-2 px-4">
            <p className="flex-1  text-black-500 font-bold ">
              Booked Seats: 
            </p>
            <p className='font-semibold'>{eventData.attendees.length}</p>
          </div>
          <ShortHostCard hostData={eventData.host} />
          
         
           <div className="flex justify-between  gap-5 px-4">
           
          
  <Link className=" mx-auto text-center rounded-full text-[20px] font-bold bg-green-300 text-black  px-4 py-2 hover:bg-green-500 hover:text-white"  to={'/eventDetails'}>
  
    
        Details
</Link>
            
          </div>
     

        
        
      </div>
    </div>
 
    </>
   
  )
}

export default AdminEventCard