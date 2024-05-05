import React from 'react'
import SidebarComponent from './AdminSidebarPannel'
import HostCard from '../../components/cards/HostCard'
import AdminUserCards from '../../components/cards/AdminUserCards'

const GivePermission = () => {
  return (
    <div className="flex flex-grow ">
      {/* Sidebar */}
      <div className="w-auto">
        <SidebarComponent />
      </div>

      <div className="flex flex-col flex-grow  overflow-hidden">
        <section className="hero__section1 w-full p-6">
          <div className="container text-center flex flex-wrap items-center justify-between">

            <div>
              <div >
                <p className='font-serif  font-semibold'>Apply Filters</p>
              </div>
              <div className=' flex gap-10 mt-2 mb-3' >
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

            <div className="max-w-[570px] w-full  ml-auto bg-[#0066ff2c] rounded-md flex items-center 
justify-end">
              <input
                type="search"
                className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer
placeholder:text-textColor"
                placeholder="Search Users by Name, Role,Email"
                // value={query}
                // onChange={e=>setQuery(e.target.value)}
              />
              <button className="btn mt-0 rounded-[0px] rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </section >
      </div>
      <div className="grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-start items-start">
        <div className="flex flex-col flex-grow m-6 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-start items-start">
            {/* {doctors.map((doctor)=><DoctorCard key={doctor._id} doctor={doctor} />)} */}
            <AdminUserCards />
            <AdminUserCards />
            <AdminUserCards />
            <AdminUserCards />
            <AdminUserCards />

          </div>

        </div>
      </div>
    </div>
  )
}

export default GivePermission
