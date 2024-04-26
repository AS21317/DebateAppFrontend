import React, { useState } from 'react'

const TakeResonCard = () => {
    const [reason, setReason] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you can handle the submission logic, e.g., send the reason to the server
      console.log('Reason of Cancellation:', reason);
    };
  
    return (
      <div className="flex flex-col gap-3 mt-1">
        <div className="flex flex-col gap-4 bg-green-100 p-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="w-7 h-7 text-center font-bold rounded-full bg-red-500">J</div>
              <span className="font-semibold">Jess Hopkins</span>
            </div>
          </div>
  
         
  
  
          {/* Input for reason of cancellation */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="reason" className="font-semibold text-[][20px] ">Reason of Cancellation:</label>
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
           <button type="submit" className="bg-blue-600 text-white font-bold mt-4  px-4 py-2 rounded-md hover:bg-blue-700">
              Submit
            </button>
           </div>
          </form>
        </div>
      </div>
    )
}

export default TakeResonCard