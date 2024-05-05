import React from 'react'
import { CgProfile } from 'react-icons/cg';
import demoImg from '../../assets/images/faq1.jpg'

const AttendeesCard = ({attendee}) => {
    return <div className="flex bg-green-200  w-[300px] m-4  p-2 rounded-lg flex-row  gap-4">
      <div className="flex   items-center"> 
      <img src={attendee.user.photo ||demoImg } alt={"hostPic"} className="rounded-full" width={35}  />
      </div>
      
      <div className="flex flex-col  text-[16px] font-medium flex-wrap
       justify-between ">
        <p >Name: { " "}{attendee.user.name}</p>
        <p>Age: {attendee.user?.age} </p>
  
     
      </div>
  
      
    </div>
}

export default AttendeesCard