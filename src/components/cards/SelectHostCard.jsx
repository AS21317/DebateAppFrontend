import React from 'react'

const SelectHostCard = ({user,index}) => {
  return (
    <div class="flex flex-col gap-3 mt-14">
    <div class="flex flex-col gap-4 bg-green-100 p-4">
        <div class="flex justify justify-between">
            <div class="flex gap-2">
               Name: <span className='font-semibold '>Jess Hopkins</span>
            </div>

           
        </div>

        <div>
           Email:<span> demo@gmail.com</span>
        </div>

       <div className='flex justify-between'>
       <div className='font-semibold'>
           Total Event:<span> 23</span>
        </div>

        <div >
            Jointd at: <span className='font-semibold'>Feb 13, 2021</span>
           
        </div>
       </div>
       <div className='flex justify-center py-2 px-4 bg-black text-white'>Select</div>
    </div>
    </div>
  )
}

export default SelectHostCard