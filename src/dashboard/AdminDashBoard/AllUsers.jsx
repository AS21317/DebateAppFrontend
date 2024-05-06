import React, { useContext, useEffect, useState } from 'react'
import SidebarComponent from './AdminSidebarPannel'
import HostCard from '../../components/cards/HostCard'
import AdminUserCards from '../../components/cards/AdminUserCards'
import { authContext } from '../../context/AuthContext'
import { Loader } from 'lucide-react'

const GivePermission = () => {
  const [filters, setFilters] = useState({
    user: true,
    host: false,
    expert: false,
  });


  
const [userLoading , setUserLoading] = useState(false)
const [userData,setUserData]  = useState([])
  
  const { user, token, role } = useContext(authContext);


// Fxn to get all users
const getAllUsers = async () => {

  setUserLoading(true);
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/v1/user/getAll`,
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

    console.log(result, "Requested All  users    is here ");

    // if res found , 1. show a toast notification , 2. setShowLoader false

    setUserLoading(false);
    setUserData(result.data);
    // toast.success(result.message);
    // Navigate('/admin/home')
  } catch (err) {
    // toast.error(err.message);
    setUserLoading(false);
  }
};


  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  useEffect(()=>{
      getAllUsers()
  },[])

  return (
    <div className="flex max-w-full">
      {/* Sidebar */}
      <div className="w-auto">
        <SidebarComponent />
      </div>


     
  
    
      
      <div className="flex flex-col   flex-grow  overflow-hidden">
        <section className="hero__section1  p-6">
          <div className="container text-center flex flex-wrap items-center justify-between">
            <div>
              <div>
                <p className='font-serif  font-semibold'>Apply Filters</p>
              </div>
              <div className='flex gap-10 mt-2 mb-3'>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      name='user'
                      checked={filters.user}
                      onChange={handleCheckboxChange}
                    />
                    User
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      name='host'
                      checked={filters.host}
                      onChange={handleCheckboxChange}
                    />
                    Host
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      name='expert'
                      checked={filters.expert}
                      onChange={handleCheckboxChange}
                    />
                    Expert
                  </label>
                </div>
              </div>
            </div>

            <div className="max-w-[570px] w-full ml-auto bg-[#0066ff2c] rounded-md flex items-center justify-end">
              <input
                type="search"
                className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none placeholder:text-base text-base cursor-pointer placeholder:text-textColor"
                placeholder="Search Users by Name, Role,Email"
              />
              <button className="btn mt-0 text-base px-2 sm:px-4 rounded-[0px] rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </section>
		
      { <div className="grid grid-cols-1 mr-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-start items-start h-full w-full">
        {/* {applications.map(({ user }, index) => {
            return <AdminHostCard 
                key={index}
                name={user.name}
                photo={user.photo}
                email={user.email}
                areaOfInterests={user.areaOfInterests}
                noOfEvents={user.events.length}
                reviews={user.events.length}
                rating={user.averageRating}
								id={user._id}
								user={user}
            /> */}
        {/* })} */}

       {
        userData.map((user,index)=>(<AdminUserCards index={index} userData={user} />))
       }
        </div>}
      </div>

        </div>
   
  );
}

export default GivePermission;
