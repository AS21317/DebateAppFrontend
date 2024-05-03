import React from 'react'
import home7 from '../../assets/images/home7.jpg'

const HotTopicCard = () => {
  return (
    <>
    <div class="relative  pb-6  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="object-cover" src={home7} />
    <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-3 text-center text-lg font-semibold text-white">Debate</span>
  </a>

    
    <div class="mt-4 mb-3 flex items-center justify-center">
    <h5 class="group-hover:text-green-900 mb-4 py-2 border  w-full text-center text-2xl bg-lime-300   font-bold">Democracy</h5>

     
    </div>
  
      
    <div className="flex gap-2 px-4">
            <p className="flex-1 text-[20px]  text-black font-bold ">
              Total Events:
            </p>
            <p className='font-semibold text-[20px]'>{26}</p>
          </div>

          <div className="flex gap-2 px-4">
            <p className="flex-1 text-[20px] text-black font-bold ">
              Total Participants:
            </p>
            <p className='font-semibold text-[20px]'>{126}</p>
          </div>

</div>

    </>
  )
}

export default HotTopicCard