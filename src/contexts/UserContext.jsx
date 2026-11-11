import React, { createContext, useEffect, useState } from 'react'
import { TOKEN_POST, USER_GET } from '../../api'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {

    const [data, setData] = useState(null)
    const [login, setLogin] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('dog@token')
        if (token) {
            getUser(token)
        }
    }, [])

    const getUser = async (token) => {
        const { url, options } = USER_GET(token)
        const response = await fetch(url, options)
        const json = await response.json()
        setData(json)
        setLogin(true)
    }


    const userLogin = async (username, password) => {
        try {
            const { url, options } = TOKEN_POST({ username, password })
            const response = await fetch(url, options)
            const { token } = await response.json()
            localStorage.setItem('dog@token', token)
            getUser(token)
        } catch (error) {
            console.error('Error logging in:', error)
        }
    }

    return (
        <UserContext.Provider value={{ userLogin, data }}>
            {children}
        </UserContext.Provider>
    )
}
