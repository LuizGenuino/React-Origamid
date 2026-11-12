import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({ children }) => {
    const { login } = useContext(UserContext)

    if (login === true) {
        return children
    }

    if (login === false) {
        return <Navigate to='/login' />
    }

    return <></>
}

export default ProtectedRouter