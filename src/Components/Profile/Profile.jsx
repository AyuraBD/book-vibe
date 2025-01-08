import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
    <div className='profile-container py-8 px-20 h-96'>
      <h1 className='text-2xl font-bold mb-4'>Profile</h1>
      <div className='profile-details'>
        <p><strong>Name:</strong> {user?.displayName || 'N/A'}</p>
        <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
        <p><strong>Username:</strong> {user?.username || 'N/A'}</p>
        <p><strong>Joined:</strong> {user?.metadata.creationTime}</p>
      </div>
    </div>
  )
}

export default Profile