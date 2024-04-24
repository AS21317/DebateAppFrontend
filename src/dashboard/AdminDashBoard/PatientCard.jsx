import React from 'react';

const PatientCard = ({user}) => {

    const {
        name,
        email,
       
        photo,
       
       gender,
       bloodType,
       appointments
        
      } = user;
      const totalAppointments = appointments?.length
  return (
    <>
      <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
          <div className="text-center my-4">
            <img
              className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4"
              src={photo}
              alt=""
            />
            <div className="py-2 ">
            <h3 className="font-bold text-2xl text-gray-800 mb-1">
                {name}</h3>
                <h3 className="font text-[16px] text-gray-800 mb-1">
                {email}</h3>
                <div className="">
            <p className="  text-black font-bold ">
              Blood Group:  <span className='text-red-600 font-extrabold '>{ bloodType}</span>
            </p>
            
          </div>
          <div className="">
            <p className="  text-black font-bold ">
              Age:  <span className='text-red-600 font-extrabold '>{ 25}</span>
            </p>
            
          </div>
                
             
            </div>
          </div>
         



          
          <div className="flex gap-2 px-2">
            <p className="flex-1  text-black font-bold ">
              Total Appointments
            </p>
            <p>{ totalAppointments|| 0}</p>
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

export default PatientCard;
