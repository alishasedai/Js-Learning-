import React ,{useContext} from 'react'
import {Navigate} from "react-router-dom"
import {UsersContext} from "../context/UsersContext"


const ProtectedRoute = ({children,allowedRoute}) => {

    const {dashboard,loading} = useContext(UsersContext);
    if(loading){
       return <h2>Checking login....</h2> 
    }

    if(!dashboard){
        return <Navigate to="/login" replace />
    }

    if(dashboard.role !== allowedRoute){
        if(dashboard.role === "admin"){
            return <Navigate to="/admin" replace />
        }
        return <Navigate to="/profile" replace />
    }

  return children
}

export default ProtectedRoute;