import React, { useEffect, useState } from 'react'
import Input from '../../components/Forms/Input'
import Button from '../../components/Forms/Button'
import useForm from '../../hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../../api'

const Login = () => {
    const username = useForm('text')
    const password = useForm('password')

    useEffect(() => {
        const token = localStorage.getItem('dog@token')
        if(token) {
            getUser(token)
        }
    }, [])

    const getUser = async (token) => {
        const { url, options } = USER_GET(token)
            const response = await fetch(url, options)
            const json = await response.json()
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const { url, options } = TOKEN_POST({ username: username.value, password: password.value })
            const response = await fetch(url, options)
            const json = await response.json()
            localStorage.setItem('dog@token', json.token)
            getUser(json.token)
        } catch (error) {
            console.error('Error logging in:', error)
        }
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                <Button>Entrar</Button>
            </form>
        </section>
    )
}

export default Login