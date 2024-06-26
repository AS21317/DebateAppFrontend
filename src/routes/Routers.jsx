import React, { useEffect } from 'react'
import {Routes,Route, useNavigate} from 'react-router-dom'
import Home from '../Pages/Home'
import Service from '../Pages/Service'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Contact from '../Pages/Contact'
import Doctors from '../Pages/Doctors/Doctors'
import DoctorsDetails from '../Pages/Doctors/DoctorsDetails'
import MyAccount from '../Pages/User-Page/MyAccount'
import Dashboard from '../dashboard/doctor-account/Dashboard'
import CheckoutSuccessPage from '../Pages/CheckoutSuccessPage'

import ProtectedRoute from './ProtectedRoute'
import AdminHomePage from '../dashboard/AdminDashBoard/AdminHomePage'
import AdminDoctorPage from '../dashboard/AdminDashBoard/AdminDoctorPage'
import AdminPatientPage from '../dashboard/AdminDashBoard/AdminPatientPage'
import AdminMessagePage from '../dashboard/AdminDashBoard/AdminMessagePage'
import HostDetails from '../Pages/HostPage/HostDetails'
import HostHomePage from '../dashboard/HostDashboard/HostHomePage'
import AdminUserDashboard from '../dashboard/AdminDashBoard/AdminUserDashboard'
import AdminHostDashboard from '../dashboard/AdminDashBoard/AdminHostDashboard'

import CreateCoAdmin from '../dashboard/AdminDashBoard/CreateCoAdmin'
import CreateHost from '../dashboard/AdminDashBoard/CreateHost'
import AdminCalender from '../dashboard/AdminDashBoard/AdminCalender'
import CreateEvent from '../dashboard/AdminDashBoard/CreateEvent'
import AllUsers from '../dashboard/AdminDashBoard/AllUsers'
import UserProfile from '../dashboard/AdminDashBoard/AdminUserProfile'
import HostAccount from '../dashboard/HostDashboard/HostAccount'
import ProfileCard from '../components/cards/ProfileCard'
import CoAdminHomePage from '../dashboard/CoAdmin/CoAdminHomePage'
import AdminProfileCard from '../dashboard/AdminDashBoard/AdminProfileCard'
import CoAdminProfileCard from '../dashboard/CoAdmin/CoAdminProfileCard'
import HostUserDashboard from '../dashboard/HostDashboard/HostUserDashboard'
import HostHostDashboard from '../dashboard/HostDashboard/HostHostDashboard'
import HostApplicant from '../dashboard/AdminDashBoard/HostApplicant'
import ApplicantProfile from '../dashboard/AdminDashBoard/HostapplicantProfile'
import AdminHostPage from '../dashboard/AdminDashBoard/AdminHostPage'
import AdminAdminsPage from '../dashboard/AdminDashBoard/AdminAdminsPage'
import AdminCoAdminPage from '../dashboard/AdminDashBoard/AdminCoAdminPage'
import AdminExpertPage from '../dashboard/AdminDashBoard/AdminExpertPage'
import CreateTopic from '../dashboard/AdminDashBoard/CreateTopic'
import AdminEventPage from '../dashboard/AdminDashBoard/AdminEventPage'
import EventDetailPage from '../components/cards/EventDetailPage'
import AllEventPage from '../Pages/Event Page/AllEventPage'
import DebateDetails from '../Pages/Services/DebateDetails'
import GdDetails from '../Pages/Services/GdDetails'
import ExpertTalkDetails from '../Pages/Services/ExpertTalkDetails'
import AllHostPage from '../Pages/HostPage/AllHostPage'
import ExpertApplicationPage from '../Pages/ExpertApplicationPage'
import ErrorPage from '../Pages/ErrorPage'
import CoAdminHostDashboard from '../dashboard/CoAdmin/CoAdminHostDashboard'
import CoAdminUserDashboard from '../dashboard/CoAdmin/CoAdminUserDashboard'
import ExpertApplicants from '../dashboard/AdminDashBoard/ExpertApplicants'
import ExpertDashboard from '../dashboard/ExpertDashboard/ExpertDashboard'
import HostapplicantProfile from '../dashboard/AdminDashBoard/HostapplicantProfile'
import ExpertApplicantProfile from '../dashboard/AdminDashBoard/ExpertApplicantProfile'
import ExpertHomePage from '../dashboard/ExpertDashboard/ExpertHomePage'


const RedirectComponent = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/errorPage');
  }, [navigate]);

  return <></>
}


const Routers = () => {

  return ( <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/services' element={<Service/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/eventDetails' element={<EventDetailPage/>} />

                   {/* All Profiles  */}
            <Route path='/host/hostProfile' element={<HostAccount/>} />

            <Route path="/admin/profile" element={<AdminProfileCard/>} />

            <Route path="/coAdmin/profile" element={<CoAdminProfileCard/>} />

            <Route path="/user/profile" element=  { <MyAccount/> } /> 


            {/* All Home Pages */}
            <Route path='/admin/home' element={<AdminHomePage/>} />

            <Route path='/host/home' element={<HostHomePage/>} />
            <Route path='/host/hosts' element={<HostHomePage/>} />
            <Route path='/coAdmin/home' element={<CoAdminHomePage/>} />
            <Route path='/expert/home' element={<ExpertHomePage/>} />




            <Route path="/admin/userDashboard" element={<AdminUserDashboard/>} />
            <Route path="/admin/hostDashboard" element={<AdminHostDashboard/>} />

            <Route path="/host/userDashboard" element={<ProtectedRoute allowedRoles={['host']}><HostUserDashboard/></ProtectedRoute>} />
            <Route path="/host/HostDashboard" element={<ProtectedRoute allowedRoles={['host']}><HostHostDashboard/></ProtectedRoute>} />
            
            <Route path="/coAdmin/userDashboard" element={<CoAdminUserDashboard/>} />
            <Route path="/coAdmin/hostDashboard" element={<CoAdminHostDashboard/>} />
            <Route path='/expert/dashBoard' element={<ExpertDashboard/>} />
            <Route path="/expert/userDashboard" element={<CoAdminUserDashboard/>} />

            
            
           {/* Admin Sidebar Routes */}
            <Route path="/admin/allUsers" element={<AllUsers/>} />
            <Route path="/admin/userProfile" element={<UserProfile/>} />
            <Route path="/admin/calender" element={<AdminCalender/>} />
            <Route path="/admin/createEvent" element={<CreateEvent/>} />
            <Route path="/admin/allEvents" element={<AdminEventPage/>} />
            <Route path="/admin/createTopic" element={<CreateTopic/>} />
            <Route path="/admin/hostApplications" element={<HostApplicant/>} />
            <Route path="/admin/expertApplications" element={<ExpertApplicants/>} />
            <Route path="/admin/hostApplicantProfile/:id" element={<HostapplicantProfile/>} />
            <Route path="/admin/expertApplicantProfile/:id" element={<ExpertApplicantProfile/>} />

            {/* Admin Navbar Routes */}
            <Route path="/admin/hosts" element={<AdminHostPage/>} />
            <Route path="/admin/admins" element={<AdminAdminsPage/>} />
            <Route path="/admin/coAdmins" element={<AdminCoAdminPage/>} />
            <Route path="/admin/experts" element={<AdminExpertPage/>} />


            
            


            <Route path='/register' element={<Signup/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/events' element={<AllEventPage/>} />
            <Route path='/hosts' element={<AllHostPage/>} />
            <Route path='/checkout-success' element={<CheckoutSuccessPage/>} />
            
            {/* <Route path='/user/profile' element=  { <ProtectedRoute allowedRoles={['user','admin']}><MyAccount/></ProtectedRoute> } />  */}
            <Route path='/doctor/profile/me' element={<ProtectedRoute allowedRoles={['admin']}><Dashboard/></ProtectedRoute>} /> 
            <Route path='/host/hostDetails' element={<HostDetails/>} />
            <Route path='/event/eventDetails/:id' element={<EventDetailPage/>} />
           
           {/* Services Route */}
            <Route path='/services/debate/details' element={<DebateDetails/>} />
            <Route path='/services/gd/details' element={<GdDetails/>} />
            <Route path='/services/et/details' element={<ExpertTalkDetails/>} />
            <Route path='/applyForExpert' element={<ProtectedRoute allowedRoles={['user','admin','expert','host']}><ExpertApplicationPage/></ProtectedRoute>} />
           
            <Route path='/expertDashboard' element={<ExpertDashboard/>} />

            
            {/* Error Page */}
            <Route path="/errorPage" element={<ErrorPage />} />

            <Route path='*' element={<RedirectComponent/>} />
  </Routes>
  )
}

export default Routers


