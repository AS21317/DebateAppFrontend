import React, { useState } from 'react'

const JoinHostCard = ({question, answer, handleChange}) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you can handle the submission logic, e.g., send the reason to the server
      console.log('Reason of Cancellation:', reason);
    };
  
    return (
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex flex-col gap-4 bg-green-100 p-4">
          {/* Input for reason of cancellation */}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="reason" className="font-semibold text-[][20px] ">{question}</label>
              <textarea
                type="text"
                id="reason"
                value={answer}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2"
                placeholder="Enter reason here..."
              />
            </div>
          
          </form>
        </div>
      </div>
    )
}

export default JoinHostCard