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
          <div className="text-center my-4">
            {/* <img
              className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4"
              src={photo}
              alt=""
            /> */}
            <div className="py-2">
            <h3 className="font-bold text-2xl text-gray-800 mb-1">
                {name}</h3>
                <h3 className="font text-[16px] text-gray-800 mb-1">
                {email}</h3>
              <div className="inline-flex p-1 rounded-md font-semibold bg-amber-300 text-gray-700 items-center">
                
               {specialization}
              </div>
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
