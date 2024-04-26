import React, { useEffect, useState } from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testtimonial/Testimonial";
import DoctorsDetails from "./DoctorsDetails";
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../Loader/Loader'
import Error from '../../components/Error/Error'
import EventCard from "../../components/cards/EventCard";

const Doctors = () => {
  const [query,setQuery] = useState('')
  const[debounceQuery,setDebounceQuery] = useState("");

  const handleSearch=()=>{
    setQuery(query.trim())
  }

  useEffect(()=>{
    const timeout = setTimeout(()=>{setDebounceQuery(query)},700)

    return ()=> clearTimeout(timeout)
  },[query])

  const {data:doctors,loading,error} = useFetchData(`${import.meta.env.VITE_BASE_URL}/api/v1/doctor?query=${debounceQuery}`)


  console.log("Doctors  at Find Doctor page are : ",doctors)
  return (
    <>
      <section className="bg-[#fff9ea] p-4">
        <div className="container text-center">
          <h2 className="heading">Find a Event</h2>
          <div
            className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center 
justify-between"
          >
            <input
              type="search"
              className="py-2 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer
placeholder:text-textColor"
              placeholder="Search doctor by name or specifications "
              value={query}
              onChange={e=>setQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>
      <section className="pt-5">
        <div className="container mt-0">
        {/* {loading && <Loader/>}
        {error && <Error/>} */}
         {  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {/* {doctors.map((doctor) => (
              <EventCard  />
            ))} */}
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
          </div>}
        </div>
      </section>

      <section>
        <div className="container">
     
          <div className="xl:w-[570px] mx-auto">
            <h2 className="heading text-center">What our members say</h2>
            <p className="text__para text-center mt-0 font-semibold">
            Engaging on this platform has been an absolute delight!.The community here is incredibly supportive.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
