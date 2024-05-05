import React from 'react'
import { Link } from 'react-router-dom'

const Servicecard = ({photo,title,params ,about}) => {
  return (
    <>
    <div class="mx-auto my-6 w-[324px] sm:w-[380px] md:w-[320px]   gap-y-8 ">
  <div class="group   overflow-hidden rounded-2xl bg-slate-200  group-hover:bg-slate-400 shadow-xl ">
    <div class="flex h-60 flex-col -mt-5 justify-between overflow-hidden">
      <img src={photo} class=" h-full w-full object-cover " />
    </div>
    <div class="flex-1 overflow-hidden bg-white py-4 sm:py-4">
      <h5 class="group-hover:text-green-900 mb-4 py-2 border  px-0 text-center text-xl  sm:text-2xl bg-lime-300   font-bold">{title}</h5>
      <p class="mb-4 text-gray-600 px-4  font-medium">{about}</p>
      <div class="flex  justify-center">
       <Link to={`/services/${params}/details`}  className='bg-blue-600 text-white rounded-[50px] py-2 px-6 font-bold text-[16px]  '>Know More </Link>
       
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Servicecard