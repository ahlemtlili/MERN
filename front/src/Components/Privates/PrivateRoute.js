import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  return (
    <div>
        {localStorage.getItem("token")?children:<Navigate to="/signIn"/>}
    </div>
  )
}

export default PrivateRoute