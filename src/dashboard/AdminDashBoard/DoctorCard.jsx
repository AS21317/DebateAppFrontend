import React from 'react';

const DoctorCard = ({doctor}) => {

    const {
        name,
        ticketPrice,
        email,reviews,
        avgRating,
        totalRating,
        photo,
        specialization,
        experiences
        
      } = doctor;
      const totalReviews = reviews?.length
  return (
    <>
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
        <div class="flex items-center">
      <img class="h-14 w-14 rounded-full object-cover" src={photo} alt="Simon Lewis" />
      <div class="ml-4 w-56">
        <p class="text-slate-800 text-xl font-extrabold">Richard Hendricks</p>
        <p class="text-slate-500">Algorithms Expert</p>
      </div>
    </div>
              <div className=' flex mb-4 mt-2 justify-center'>
              <div className=" px-4 py-2 mx-auto rounded-md  grid place-content-center font-semibold bg-amber-300 text-gray-700 ">
                
                {specialization}
               </div>

              </div>
         

<div className="flex gap-2 px-2">
            <p className="flex-1  text-black font-bold ">
              Booking Price
            </p>
            <p>Rs. {ticketPrice || 250}</p>
          </div>
<div className="flex gap-2 px-2">
            <p className="flex-1  text-black font-bold ">
              Total Appointments
            </p>
            <p>{totalRating}</p>
          </div>
          <div className="flex gap-2 px-2">
            <p className="flex-1  text-black font-bold ">
              Average Rating
            </p>
            <p>{avgRating || 0}</p>
          </div>
          <div className="flex gap-2 px-2">
            <p className="flex-1  text-black font-bold ">
              Total Reviews
            </p>
            <p>{ totalReviews|| 0}</p>
          </div>
        </div>
        <div className="px-4 py-4">
           <div className="flex gap-2 px-2">
           
            <button className="flex-1 bg-blue-600 rounded-full border-2font-semibold text-black px-4 py-2">
              Details
            </button>
            <button className="flex-1 bg-red-600 rounded-full border-2 font-semibold text-black px-4 py-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
