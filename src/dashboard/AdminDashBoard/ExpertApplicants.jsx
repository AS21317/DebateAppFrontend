import React, { useContext, useEffect, useState } from 'react'
import SidebarComponent from './AdminSidebarPannel'
import ApplicantCard from '../../components/cards/ApplicantCard'
import { HashLoader as Loader } from 'react-spinners'
import { toast } from 'react-toastify'
import { authContext } from '../../context/AuthContext'

const ExpertApplicants = () => {
	const [applications,setApplications] = useState([])
	const {token} = useContext(authContext) 
	const [loading,setLoading] = useState(false)


  	const getPendingApplications = async()=>{
		setLoading((true))
		try {
			const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/expertApplication/get?status=pending`, {
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

			console.log(result ,"Request data is here ");

			setLoading(false);
			setApplications(result.data)
			toast.success(result.message);
		} catch (err) {
			toast.error(err.message);
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
      	{!loading  && 
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-start items-start h-full w-full">
			{/* {applications.map(({ user }, index) => {
				return <ApplicantCard 
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
				/>
			})} */}
        </div>}
      </div>
  </div>
  
  )
}

export default ExpertApplicants