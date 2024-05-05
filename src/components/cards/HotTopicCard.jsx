import React from 'react'
import home7 from '../../assets/images/home7.jpg'

const HotTopicCard = ({topicData}) => {
  console.log("Topic here is ", topicData)
  return (
    <>
    <div class="relative  pb-4  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="object-cover" src={topicData.photo} />
    <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-3 text-center text-lg font-semibold text-white">Debate</span>
  </a>

    
    <div class="mt-4  flex items-center justify-center">
    <h5 class="group-hover:text-green-900 mb-4 py-2 border  w-full text-center text-[18px]  bg-lime-300   font-bold">{topicData.name}</h5>

     
    </div>
  
      
    <div className="flex gap-2 items-center text-base  px-4">
            <p className="flex   !text-black font-bold ">
              Total Events:
            </p>
            <p className='font-semibold !text-black  text-[18px]'>{topicData.events.length}</p>
          </div>

          <div className="flex items-center gap-2 px-4">
            <p className="flex !text-black  text-base  font-bold ">
              Total Participants:
            </p>
            <p className='font-semibold !text-black  text-[18px]'>{topicData.totalParticipants}</p>
          </div>

</div>

    </>
  )
}

export default HotTopicCard