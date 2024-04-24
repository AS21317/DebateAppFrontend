import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Loader from '../../Loader/Loader'
import Error from '../../components/Error/Error'


const MyBookings = () => {
const {data:appointments , loading,error} = useFetchData(`https://medical-booking-backend.vercel.app/api/v1/user/appointments/my-appointtments`)


  return (
    <div>
          {loading && !error && <Loader/>}

{error && !loading && <Error errMessage={error} />}

{
    !loading && !error && appointments.length === 0 && (
        <h2 className= 'mt-5 text-center text-primaryColor leading-7 font-semibold text-[20px]  '>You did not book any doctor yet !</h2>
    )  
}

{
 !loading && !error && (<div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
    {
        appointments.map((doctor)=>(
            <DoctorCard doctor={doctor} key={doctor._id} />
        ))
    }

   
 </div>
)}

    </div>
  )
}

export default MyBookings