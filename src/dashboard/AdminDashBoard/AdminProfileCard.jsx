import React, { useContext } from 'react'
import { authContext } from '../../context/AuthContext'

const AdminProfileCard = () => {
    const {user,role,loading} = useContext(authContext)
    console.log(user,role)
  return (
    <div>AdminProfileCard</div>
  )
}

export default AdminProfileCard