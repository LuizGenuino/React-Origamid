import React, { createContext, useEffect, useState } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../../api'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {

    const navigate = useNavigate()

    const [data, setData] = useState(null)
    const [login, setLogin] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const autoLogin = async () => {
            const token = localStorage.getItem('dog@token')
            if (token) {
                try {
                    setError(null)
                    setLoading(true)
                    const { url, options } = TOKEN_VALIDATE_POST(token)

                    const response = await fetch(url, options)

                    if (!response.ok) {
                        throw new Error('Token Inválido')
                    }

                    await getUser(token)
                } catch (error) {
                    userLogout()
                } finally {
                    setLoading(false)
                }
            }
        }
        autoLogin()
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
            setError(null)
            setLoading(true)
            const { url, options } = TOKEN_POST({ username, password })
            const response = await fetch(url, options)
            if (!response.ok) {
                throw new Error(`Error Login:  Usuario Invalido`)
            }
            const { token } = await response.json()
            localStorage.setItem('dog@token', token)
            await getUser(token)
        } catch (error) {
            setError(error.message)
            console.error('Error logging in:', error)
            setLogin(true)
            navigate('/conta')

        } finally {
            setLoading(false)
        }
    }

    const userLogout = async () => {
        navigate('/login')
        setData(null)
        setError(null)
        setLoading(false)
        setLogin(false)
        localStorage.removeItem('dog@token')
    }

    return (
        <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login }}>
            {children}
        </UserContext.Provider>
    )
}
