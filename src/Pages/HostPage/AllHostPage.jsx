import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authContext } from "../../context/AuthContext";
import { HashLoader } from "react-spinners";
import EventCard from "../../components/cards/EventCard";
import HostCard from "../../components/cards/HostCard";

const AllHostPage = () => {
  const [loadingHost, setLoadingHost] = useState(false);

  const [hostData, setHostData] = useState([]);
  const { user, token, role } = useContext(authContext);

  



   

  
   //Fetching All Hosts Events

   const getAllHosts = async () => {
    setHostData(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/host/getAll`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

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

      console.log(result, "Requested Host   is here ");

      // if res found , 1. show a toast notification , 2. setShowLoader false

      setHostData(false);
      setHostData(result.data);
      // toast.success(result.message);
      // Navigate('/admin/home')
    } catch (err) {
      // toast.error(err.message);
      setLoadingHost(false);
    }
  };


  useEffect(() => {
    getAllHosts()
  }, []);

  return (
    <>
     <section className="hero__section1 ">
        <div className="container text-center">
          <h2 className="heading">Find a Host</h2>
          <div
            className="max-w-[570px] w-full  mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center 
justify-between"
          >
            <input
              type="search"
              className="py-4 pl-4 pr-2 text-base placeholder:text-base bg-transparent w-full focus:outline-none cursor-pointer
placeholder:text-textColor"
              placeholder="Search events by type,name, host name or language    "
              // value={query}
              // onChange={e=>setQuery(e.target.value)}
            />
            <button  className="btn text-base  px-2 sm:px-4 mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>
    <section className="hero__section pt-6 sm:py[75px]">
      <div className="container w-full max-w-[100%]">
       

          {loadingHost  && (
                    <div className=" text-center flex justify-center mt-10 font-bold text-2xl text-red-600">

            <HashLoader className="text-center" size={35} color="red" />
            </div>
          )}

          {!loadingHost && hostData?.length === 0 && (
            <div className=" text-center flex justify-center mt-10 font-bold text-2xl text-red-600">
             
              <h1>No Host Available </h1>
            </div>
          )}
        </div>
        {/* displaying Host Data */}
        {hostData?.length > 0 && (
          <div
            className="sm:grid lg:px-8  grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-[30px] mt-[40px]
        lg:mt-[10px]"
          >
            {hostData.map((host) => (
              <HostCard hostData={host} />
            ))}
          </div>
        )}

       

     
    
    </section>


    </>
  );
};

export default AllHostPage;
