import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import ForgotPass from './ForgotPass'
import ResetPass from './ResetPass'

const Auth = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='registrar' element={<Register />}/>
            <Route path='esqueci' element={<ForgotPass />}/>
            <Route path='resetar' element={<ResetPass />}/>
        </Routes>
    </div>
  )
}

export default Auth