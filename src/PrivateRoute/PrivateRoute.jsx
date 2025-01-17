import React, { useContext } from 'react'
import { AuthContext } from '../Components/AuthProvider/AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  if(loading){
    return <span className="loading loading-ring loading-lg"></span>
  }
  if(user){
    return children
  }
  return (
    <Navigate to="/signin"></Navigate>
  )
}

export default PrivateRoute