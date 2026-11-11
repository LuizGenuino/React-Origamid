import React, { useState } from 'react'
import Input from '../../components/Forms/Input'
import Button from '../../components/Forms/Button'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(json => {
            console.log(json)
        })

    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" />
                <Input label="Senha" type="password" name="password" />
                <Button>Entrar</Button>
            </form>
        </section>
    )
}

export default Login