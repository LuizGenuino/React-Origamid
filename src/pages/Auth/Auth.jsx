import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import ForgotPass from './ForgotPass'
import ResetPass from './ResetPass'
import { UserContext } from '../../contexts/UserContext'
import styles from './Auth.module.css'


const Auth = () => {
    const context = useContext(UserContext)

    if (context.login) {
        return <Navigate to="/conta" />
    }

    return (
        <section className={styles.auth}>
            <div className={styles.forms}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='registrar' element={<Register />} />
                    <Route path='esqueci' element={<ForgotPass />} />
                    <Route path='resetar' element={<ResetPass />} />
                </Routes>
            </div>
        </section >
    )
}

export default Auth