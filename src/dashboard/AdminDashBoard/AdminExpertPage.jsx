import React, { useContext, useEffect, useState } from 'react'
import SidebarComponent from './AdminSidebarPannel'
import HostCard from '../../components/cards/HostCard'
import AdminUserCards from '../../components/cards/AdminUserCards'
import ApplicantCard from '../../components/cards/ApplicantCard'
import useFetchData from '../../hooks/useFetchData'
import { HashLoader as Loader } from 'react-spinners'
import { toast } from 'react-toastify'
import { authContext } from '../../context/AuthContext'
import AdminHostCard from '../../components/cards/AdminHostCard'

const AdminHostPage = () => {
	const [expertsData,setexpertsData] = useState([])
	const {token} = useContext(authContext) 
	const[loading,setLoading] = useState(false)


  const getPendingApplications = async()=>{
		setLoading((true))
		try {
				const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/expert/get`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
							"Authorization": `Bearer ${token}` 
					},
				
				});
	
				
	
	
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
			
	
				console.log(result ,"Request Expert is here ");

				
	
	
				// if res found , 1. show a toast notification , 2. setLoading false
	
				setLoading(false);
				setexpertsData(result.data)
				toast.success(result.message);
				// Navigate('/admin/home')
			} catch (err) {
				// toast.error(err.message);
				setLoading(false);
			}
		};

		useEffect(()=>{
			getPendingApplications()
		},[])

  return (
    <div className="flex flex-grow ">
    {/* Sidebar */}
    <div className="w-auto">
      <SidebarComponent />
    </div>

    <div className="flex flex-col justify-center items-center flex-grow m-6 overflow-hidden">
			{loading && <Loader />}
      {!loading  && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-start items-start h-full w-full">
        {expertsData.map(( expert , index) => {
            return <AdminHostCard 
                key={index}
               role={'expert'}
								user={expert.user}
                expertise={expert.expertise}
            />
        })}
        </div>}
      </div>
  </div>
  
  )
}

export default AdminHostPage