import React from 'react'
import climate1 from '../../assets/images/climate1.jpg'

const EventCard = () => {
  return (
    <>
    <div class=" rounded-lg  group-hover:scale-110 shadow-2xl ">
      <img class="h-48 w-full object-cover object-end" src={climate1} alt="Home in Countryside" />
      <div class="py-4">
        <h3 className='font-bold text-[20px]   text-center py-2 w-full   mb-4 text-[#00246B] bg-lime-300 ' >Climate Change</h3>
      <div className="flex  gap-2 px-4">
            <p className="flex-1 text-black-500   font-bold ">
              Type: 
            </p>
            <p className='text-red-600  font-bold text-[20px] '>Debate</p>
          </div>

          <div className="flex gap-2 px-4">
            <p className="flex-1  text-black-500 font-bold ">
              Date: 
            </p>
            <p className='font-semibold'>25-04-2014</p>
          </div>

          <div className="flex gap-2 px-4">
            <p className="flex-1  text-black-500 font-bold ">
              Time: 
            </p>
            <p className='font-semibold'>08:30PM</p>
          </div>

          <div className="flex gap-2 px-4">
            <p className="flex-1  text-black-500 font-bold ">
              Seats Available: 
            </p>
            <p className='font-semibold'>5</p>
          </div>
          <div className=" py-4">
           <div className="flex justify-between  gap-5 px-4">
           
           <button className="flex-1 bg-blue-600 rounded-full text-[20px] font-bold text-white px-4 py-2 hover:bg-yellow-500 hover:text-black">
    Register
  </button>
  <button className="flex-1 bg-stone-200 rounded-full text-[20px] font-bold text-black px-4 py-2 hover:bg-green-500 hover:text-white">
    Details
  </button>
            
          </div>
        </div>

        
        
      </div>
    </div>
 
    </>
   
  )
}

export default EventCard