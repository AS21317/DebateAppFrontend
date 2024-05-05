import React, { useContext, useState } from 'react'
import AdminEventCard from '../../components/cards/AdminEventCard'
import AdminSidebarPannel from './AdminSidebarPannel'

import { authContext } from '../../context/AuthContext'
import { HashLoader } from 'react-spinners'
import { toast } from 'react-toastify'

const AdminEventPage = () => {
    const {user,token,role}  =useContext(authContext)
   
    const [loading,setLoading] = useState(false)
    const [eventsData, setEventsData]= useState([])


    const eventHandler = async(status)=>{
       
        setLoading(true)
        try {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/events/getByStatus?status=${status}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}` 
                },
            });

            


            const result = await res.json();
            
            if (!res.ok) {
                throw new Error(result.message);
            }

            // dispatch({
            //   type:"LOGIN_SUCCESS",
            //   payload:{
            //     user:result.data,
                    
                    
            //   }
            // });
        

            console.log(result ,"Request Event   is here ");

            


            // if res found , 1. show a toast notification , 2. setLoading false

            setLoading(false);
            setEventsData(result.data)
            // Navigate('/admin/home')
        } catch (err) {
            setLoading(false);
        }
    };


    
    
  


  return (
    <div className="flex flex-grow ">
    {/* Sidebar */}
    <div className="w-auto">
      <AdminSidebarPannel/>
    </div>

    <div className="flex flex-col items-center pt-6 flex-grow  mx-8 overflow-hidden">
			{loading && <HashLoader size={45} color='red' />}
      {!loading  && 
      <div>
        <div className=' bg-gray-200 flex flex-wrap gap-4'>
            <button onClick={()=>eventHandler("today")} className='bg-green-600 rounded-xl px-4 py-2 my-2 mx-4 font-bold text-[18px] text-white'  > Todays Events</button>

            <button onClick={()=>eventHandler("upcoming")} className='bg-green-600 rounded-xl px-4 py-2 my-2 mx-4 font-bold text-[18px] text-white'  >upcoming Events</button>

            <button onClick={()=>eventHandler("completed")} className='bg-green-600 rounded-xl px-4 py-2 my-2 mx-4 font-bold text-[18px] text-white'  >Completed Events</button>

            <button onClick={()=>eventHandler("cancelled")} className='bg-green-600 rounded-xl px-4 py-2 my-2 mx-4 font-bold text-[18px] text-white'  >Cancelled Events</button>

            <button onClick={()=>eventHandler("pending")} className='bg-green-600 rounded-xl px-4 py-2 my-2 mx-4 font-bold text-[18px] text-white'  >Pending Events</button>
           
        </div>
        <div className="flex flex-wrap  gap-4  justify-start items-start h-full w-full">
        
       
         {eventsData.map((eventData)=><AdminEventCard eventData = {eventData} role={role}/>)}
     
        </div>
      </div>
      }
      </div>
  </div>
  )
}

export default AdminEventPage