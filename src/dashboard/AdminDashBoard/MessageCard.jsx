import { Verified } from 'lucide-react';
import React from 'react'

const MessageCard = ({messageInfo}) => {

    const {
        firstName,
        lastName,
        email,
        message,
        subject,
        visitor,
       
        
      } = messageInfo;
  return (
    <>
    <div class=" w-full pt-4 p-4">
  <div class=" gap-14 md:gap-5">
  <div className={`rounded-xl ${!visitor ? "bg-green-300" : "bg-red-300"} p-2 text-center shadow-xl`}>
    <div className="flex mt-2 pt-2 gap-2 px-2">
            <p className="flex-1 text-left    text-black font-bold ">
             {firstName}{" "}{lastName}
            </p>
           {visitor? <p className='text-green-800 font-bold text-[18px] '>Random</p>: <p className='text-green-800 font-bold text-[18px] '>Verified</p>}
          </div>

          <div className="flex mt-2 pt-2 gap-2 px-2">
            <p className="flex-1 text-left    text-black font-bold ">
             Email:
            </p>
            <p>{email}</p>
          </div>
          <div className="flex mt-2 gap-2 px-2">
            <p className="flex-1 text-left    text-black font-bold ">
             Subject: 
            </p>
            <p>{subject}</p>
          </div>

          <div className="flex flex-col mt-4 gap-2 px-2">
            <p className="flex-1 text-center    text-black font-bold ">
             Message 
            </p>
            <p >{message} </p>
          </div>
      
      
    </div>
   
    
  </div>
  </div>


</>
  )
}

export default MessageCard