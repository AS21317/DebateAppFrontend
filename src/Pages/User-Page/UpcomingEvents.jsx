import React from 'react'
import climate1 from '../../assets/images/climate1.jpg'
import { Link } from 'react-router-dom'

const UpcommingEventCard = ({eventData}) => {
  return (
    <>
    <div class="bg-green-100 rounded-lg  group-hover:scale-110 shadow-2xl ">
      <div class="pt-4 pb-2">
        <h3 className='font-bold text-[20px]   text-center py-2 w-full   mb-4 text-[#00246B] bg-lime-300 ' >{eventData.topic.name}</h3>
      <div className="flex  gap-2 px-4">
            <p className="flex-1 text-black-500   font-bold ">
              Type: 
            </p>
            <p className='text-red-600  font-bold text-[20px] '>{eventData.type}</p>
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
              Language: 
            </p>
            <p className='font-semibold'>{eventData.language}</p>
          </div>

          
          <div className="px-4 py-4">
           <div className="flex gap-2 px-4">
           
           <a  target='_blank'  href={`${eventData.meetLink}`} rel={"noopener noreferrer"} className="flex-1 bg-blue-600 rounded-full  text-[20px] font-bold text-white px-4 py-2">
          
              Join Meet
          </a>
            
            
          </div>
        </div>

        
        
      </div>
    </div>
 
    </>
   
  )
}

export default UpcommingEventCard