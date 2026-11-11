import React, { useContext, useEffect, useState } from 'react'
import Input from '../../components/Forms/Input'
import Button from '../../components/Forms/Button'
import useForm from '../../hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../../api'
import { UserContext } from '../../contexts/UserContext'

const Login = () => {
    const context = useContext(UserContext)
    const username = useForm('text')
    const password = useForm('password')


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!username.validate() || !password.validate()) {
            return
        }

        context.userLogin(username.value, password.value)
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