import React from 'react'
import convertTime from '../../utils/convertTime'
import { authContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
const SidePannel = () => {
  const {token} = useContext(authContext)

const bookingHandler = async()=>{
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/bookings/checkout-session/${doctorId}`,{
      method:'POST',
      headers:{
        Authorization:`Bearer ${token}`
      }
    })

    const data =await res.json();
    if(!res.ok)
    {
      throw new Error(data.message + "Plaese try again ")
    }


    if(data.session.url)
    {

      window.location.href = data.session.url
    }


    } catch (err) {
    toast.error(err.message)
  }


}

  
  // console.log("Available time is : ",timeSlots)
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 bg-white-100 rounded-md">
    <div className="flex items-center justify-between">
    <p className="text__para mt-0 font-semibold">Want to talk with me here are the <span className=' text-green-950 font-semibold'>available time slots</span></p>
   
    </div>
    <div className="mt-[10px]">
    
    <ul className="mt-3">
    <li  className="flex items-center justify-between mb-2">
    <p className="text-[15px] leading-6 text-textColor font-semibold">
      Monday 
    </p>
    <p className="text-[15px] leading-6 ltext-textColor font-semibold">
      08:30 PM - 09:30 PM
    </p>
    
    </li>

    <li  className="flex items-center justify-between mb-2">
    <p className="text-[15px] leading-6 text-textColor font-semibold">
      Tuesday 
    </p>
    <p className="text-[15px] leading-6 ltext-textColor font-semibold">
      08:30 PM - 09:30 PM
    </p>
    
    </li>

    <li  className="flex items-center justify-between mb-2">
    <p className="text-[15px] leading-6 text-textColor font-semibold">
      Saturday 
    </p>
    <p className="text-[15px] leading-6 ltext-textColor font-semibold">
      08:30 PM - 09:30 PM
    </p>
    
    </li>

   

    


  
    </ul>
    </div>
    <Link to={"/events"}  ><button className="btn px-2 w-full rounded-md">
    Join me in upcoming events</button></Link>
    </div>
  )
}

export default SidePannel