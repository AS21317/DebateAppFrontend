import React from 'react'

const Servicecard = ({photo,title ,about}) => {
  return (
    <>
    <div class="mx-auto my-6  max-w-screen-xl  gap-y-8 ">
  <div class="group  mx-4 overflow-hidden rounded-2xl bg-slate-200  group-hover:bg-slate-400 shadow-xl ">
    <div class="flex h-60 flex-col -mt-5 justify-between overflow-hidden">
      <img src={photo} class=" h-full w-full object-cover " />
    </div>
    <div class="flex-1 overflow-hidden bg-white  py-8">
      <h5 class="group-hover:text-green-900 mb-4 py-2 border  px-0 text-center text-2xl bg-lime-300   font-bold">{title}</h5>
      <p class="mb-6 text-gray-600 px-4  font-medium">{about}</p>
      <div class="flex  justify-center">
       <button className='bg-blue-600 text-white rounded-[50px] py-3 px-8 font-bold text-[20px]  '>Know More </button>
       
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Servicecard