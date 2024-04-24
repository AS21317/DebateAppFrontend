import React from 'react'
import convertTime from '../../utils/convertTime'
import { authContext } from '../../context/AuthContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'
const SidePannel = ({doctorId,ticketPrice,timeSlots}) => {
  const {token} = useContext(authContext)

const bookingHandler = async()=>{
  try {
    const res = await fetch(`https://medical-booking-backend.vercel.app/api/v1/bookings/checkout-session/${doctorId}`,{
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

  
  console.log("Available time is : ",timeSlots)
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
    <div className="flex items-center justify-between">
    <p className="text__para mt-0 font-semibold">Ticket Price</p>
    <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
    Rs.{ticketPrice}
    </span>
    </div>
    <div className="mt-[30px]">
    <p className="text__para mt-0 font-semibold text-headingColor">
    Available Time Slots:
    </p>
    <ul className="mt-3">
   {timeSlots?.map((time,index)=>(  <li key={index} className="flex items-center justify-between mb-2">
    <p className="text-[15px] leading-6 text-textColor font-semibold">
    {time.day.charAt(0).toUpperCase()+time.day.slice(1)}
    </p>
    <p className="text-[15px] leading-6 ltext-textColor font-semibold">
    {convertTime(time.startingTime)} - {convertTime(time.endingTime)}
    </p>
    </li>))}

   

    


  
    </ul>
    </div>
    <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">Book Appointment</button>
    </div>
  )
}

export default SidePannel