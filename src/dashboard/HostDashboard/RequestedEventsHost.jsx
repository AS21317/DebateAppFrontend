import React, { useContext, useEffect, useState } from 'react'
import climate1 from '../../assets/images/climate1.jpg'
import { HashLoader } from 'react-spinners'
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import TakeResonCard from '../../components/cards/TakeResonCard';
import { toast } from 'react-toastify';
import { authContext } from '../../context/AuthContext';



const RequestedEventsHost
 = ({eventData}) => {
  const [loading, setLoading] = useState(false)
  const {token} = useContext(authContext)

  // to handle moddal oppenning 
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modal = document.getElementById('my_modal_1');
      if (modal && event.target === modal) {
        modal.close();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  const handleApproveEvent = async (e,meetLink) => {
    e.preventDefault()
    setLoading(true)
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/events/approve/${eventData._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify({meetLink}),
          });

        console.log(eventData)

        const result = await res.json();
        
        if (!res.ok) {
            throw new Error(result.message);
        }

        console.log(result ,"Request Event   is here ");

        // if res found , 1. show a toast notification , 2. setLoading false

        setLoading(false);
        
        toast.success(result.message);
        // Navigate('/admin/home')
    } catch (err) {
        toast.error(err.message);
        setLoading(false);
    }
  }

  const handleCancelEvent =async(e,reason)=>{
    e.preventDefault()
    setLoading(true)
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/events/cancel/${eventData._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 

            },
            body: JSON.stringify({reason}),

        });

        console.log(eventData)

        const result = await res.json();
        
        if (!res.ok) {
            throw new Error(result.message);
        }

        console.log(result ,"Request Event   is here ");

        // if res found , 1. show a toast notification , 2. setLoading false

        setLoading(false);
        toast.success(result.message);
        // Navigate('/admin/home')
    } catch (err) {
        toast.error(err.message);
        setLoading(false);
    }

  }



  return (
    <>
      <div className="bg-green-100 rounded-lg group-hover:scale-110 shadow-2xl">
      <div className="pt-4 pb-2">
        <h3 className='font-bold text-[20px] text-center py-2 w-full mb-4 text-[#00246B] bg-lime-300'>Climate Change</h3>
        <div className="flex gap-2 px-4">
          <p className="flex-1 text-black-500 font-bold">
            Type: 
          </p>
          <p className='text-red-600 font-bold text-[20px] capitalize'>{eventData.type}</p>
        </div>

        <div className="flex gap-6 px-4">
          <p className="flex-1 text-black-500 font-bold">
            Start Date: 
          </p>
          <p className='font-semibold'>{eventData.startDate}</p>
        </div>

        <div className="flex gap-2 px-4">
          <p className="flex-1 text-black-500 font-bold">
            Start Time: 
          </p>
          <p className='font-semibold'>{eventData.startTime}</p>
        </div>

        <div className="flex gap-2 px-4">
          <p className="flex-1 text-black-500 font-bold">
            End Date: 
          </p>
          <p className='font-semibold'>{eventData.endDate}</p>
        </div>

        <div className="flex gap-2 px-4">
          <p className="flex-1 text-black-500 font-bold">
            End Time: 
          </p>
          <p className='font-semibold'>{eventData.endTime}</p>
        </div>

        <div className="flex gap-2 px-4">
          <p className="flex-1 text-black-500 font-bold">
            Total Seats
          </p>
          <p className='font-semibold'>{eventData.maxAttendees}</p>
        </div>

        <div className="px-4 py-4">
          <div className="flex gap-2">
            <button onClick={() => document.getElementById('my_modal_3').showModal()} className="flex-1 bg-green-500 rounded-full text-white flex items-center justify-center" >
              <TiTick size={34} />
            </button>
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="flex-1 bg-red-500 rounded-full text-white flex items-center justify-center">
              <RxCross2 size={34} />
            </button>

                           {/* Modal Section for cancelation */}
          <div className='flex justify-center'>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
              <TakeResonCard name={eventData.host.user.name} title={"Reason for cancelation" } handleSubmit={handleCancelEvent}  />

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>

           {/* Modal Section for Approving */}
           <div className='flex justify-center'>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
              <TakeResonCard name={eventData.host.user.name} title={" Enter Gmeet Link"} handleSubmit={handleApproveEvent} />

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>


          </div>
        </div>
      </div>
    </div>
 
    </>
   
  )
}

export default RequestedEventsHost
