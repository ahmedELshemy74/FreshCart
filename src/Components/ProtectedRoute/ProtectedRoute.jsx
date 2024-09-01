import React, { useState } from 'react'
import style from './ProtectedRoute.module.css'
import { Navigate, useNavigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {

  if (localStorage.getItem('userToken')) {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
  
}
