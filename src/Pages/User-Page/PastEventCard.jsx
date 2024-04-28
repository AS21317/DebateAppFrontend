import React, { useState,useEffect } from 'react'
import climate1 from '../../assets/images/climate1.jpg'
import Modal from '../../components/cards/Modal'
import EventCard from '../../components/cards/EventCard'
import ReviewCard from '../../components/cards/ReviewCard'

const PastEventCard = () => {
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

    const [reviewShow,setReviewShow] = useState(false)
  return (
    <>
    <div class="bg-[#f2ecdf] mt-5 rounded-lg  group-hover:scale-110 shadow-2xl ">
      <div class="pt-0 pb-2">
        <h3 className='font-bold text-[20px]   text-center py-2 w-full   mb-4 text-[#00246B] bg-[#9feef5]  ' >Climate Change</h3>
      <div className="flex  gap-2 px-4">
            <p className="flex-1 text-black-500   font-bold ">
              Type: 
            </p>
            <p className='text-red-600  font-bold text-[20px] '>Debate</p>
          </div>

          <div className="flex gap-2 px-4">
            <p className="flex-1  text-black-500 font-bold ">
              Date: 
            </p>
            <p className='font-semibold'>25-04-2014</p>
          </div>

          <div className="flex gap-2 px-4">
            <p className="flex-1  text-black-500 font-bold ">
              Time: 
            </p>
            <p className='font-semibold'>08:30PM</p>
          </div>

          
        
         <div className=' flex    justify-center '>  
         <button className="btn px-2 py-2  " onClick={() => document.getElementById('my_modal_1').showModal()}>See Reviews</button>
         </div>
 



               {/* Modal Section */}
<div className='flex justify-center'>
  <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>

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
 
    </>
   
  )
}

export default PastEventCard