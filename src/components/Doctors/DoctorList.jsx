import React from 'react'

import DoctorCard from './DoctorCard'
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../Loader/Loader'
import Error from '../Error/Error'

const DoctorList = () => {

    const {data:doctors,loading,error} = useFetchData(`${import.meta.env.VITE_BASE_URL}/api/v1/doctor`)
    console.log("Doctors available are : ",doctors)
    return (
        <>
        {loading && <Loader/>}
        {error && <Error/>}
       {!loading && !error && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[3epx] lg:mt- 
        [55px]'>{doctors.map(( doctor)=> <DoctorCard key={doctor._id} doctor={doctor}/>)}</div>
}

</>
        
        )
}

export default DoctorList