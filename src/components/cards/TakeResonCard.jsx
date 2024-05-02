import React, { useState } from 'react'

const TakeResonCard = ({name,title,handleSubmit}) => {
    const [reason, setReason] = useState('');

   
  
    return (
      <div className="flex flex-col gap-3 mt-1">
        <div className="flex flex-col gap-4 bg-green-100 p-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="w-7 h-7 text-center font-bold rounded-full bg-red-500">J</div>
              <span className="font-semibold">J{name}</span>
            </div>
          </div>
  
         
  
  
          {/* Input for reason of cancellation */}
          <form onSubmit={(e)=>handleSubmit(e,reason)}>
            <div className="flex flex-col gap-2">
              <label htmlFor="reason" className="font-semibold text-[][20px] ">{title}</label>
              <input
                type="text"
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2"
                placeholder="Enter reason here..."
              />
            </div>
           <div className=' flex justify-end'>
           <button  type="submit" className="bg-blue-600 text-white font-bold mt-4  px-4 py-2 rounded-md hover:bg-blue-700">
              Submit
            </button>
           </div>
          </form>
        </div>
      </div>
    )
}

export default TakeResonCard