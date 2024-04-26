import React, { useEffect } from 'react'
import climate1 from '../../assets/images/climate1.jpg'
import { HashLoader } from 'react-spinners'
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import TakeResonCard from '../../components/cards/TakeResonCard';



const RequestedEventsHost
 = () => {

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


  return (
    <>
      <div className="bg-green-100 rounded-lg w-[200px] group-hover:scale-110 shadow-2xl">
      <div className="pt-4 pb-2">
        <h3 className='font-bold text-[20px] text-center py-2 w-full mb-4 text-[#00246B] bg-lime-300'>Climate Change</h3>
        <div className="flex gap-2 px-4">
          <p className="flex-1 text-black-500 font-bold">
            Type: 
          </p>
          <p className='text-red-600 font-bold text-[20px]'>Debate</p>
        </div>
        <div className="flex gap-2 px-4">
          <p className="flex-1 text-black-500 font-bold">
            Date: 
          </p>
          <p className='font-semibold'>25-04-2014</p>
        </div>
        <div className="flex gap-2 px-4">
          <p className="flex-1 text-black-500 font-bold">
            Time: 
          </p>
          <p className='font-semibold'>08:30PM</p>
        </div>
        <div className="px-4 py-4">
          <div className="flex gap-2">
            <button className="flex-1 bg-green-500 rounded-full text-white flex items-center justify-center">
              <TiTick size={34} />
            </button>
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="flex-1 bg-red-500 rounded-full text-white flex items-center justify-center">
              <RxCross2 size={34} />
            </button>

                           {/* Modal Section */}
<div className='flex justify-center'>
  <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
     <TakeResonCard/>

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
