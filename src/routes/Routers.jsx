import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Service from '../Pages/Service'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Contact from '../Pages/Contact'
import Doctors from '../Pages/Doctors/Doctors'
import DoctorsDetails from '../Pages/Doctors/DoctorsDetails'
import MyAccount from '../dashboard/user-acount/MyAccount'
import Dashboard from '../dashboard/doctor-account/Dashboard'
import CheckoutSuccessPage from '../Pages/CheckoutSuccessPage'

import ProtectedRoute from './ProtectedRoute'
import AdminHomePage from '../dashboard/AdminDashBoard/AdminHomePage'
import AdminDoctorPage from '../dashboard/AdminDashBoard/AdminDoctorPage'
import AdminPatientPage from '../dashboard/AdminDashBoard/AdminPatientPage'
import AdminMessagePage from '../dashboard/AdminDashBoard/AdminMessagePage'

const Routers = () => {
  return ( <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/services' element={<Service/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/admin/home' element={<AdminHomePage/>} />
            <Route path="/admin/doctors" element={<AdminDoctorPage/>} />
            <Route path="/admin/patients" element={<AdminPatientPage/>} />
            <Route path="/admin/messages" element={<AdminMessagePage/>} />

            <Route path='/register' element={<Signup/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/doctors' element={<Doctors/>} />
            <Route path='/checkout-success' element={<CheckoutSuccessPage/>} />
            
            <Route path='/user/profile/me' element=  { <ProtectedRoute allowedRoles={['patient']}><MyAccount/></ProtectedRoute> } /> 
            <Route path='/doctor/profile/me' element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard/></ProtectedRoute>} /> 
            <Route path='/doctor/:id' element={<DoctorsDetails/>} />
  </Routes>
  )
}

export default Routers


