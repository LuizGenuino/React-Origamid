import React, { useContext } from 'react'
import styles from './Login.module.css'
import Input from '../../components/Forms/Input'
import Button from '../../components/Forms/Button'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import useForm from '../../hooks/useForm'
import { USER_POST } from '../../../api'
import useFetch from '../../hooks/useFetch'
import Error from '../../helpers/Error'
import Head from '../../helpers/Head'

const Register = () => {

    const { userLogin } = useContext(UserContext)
    const { loading, request, error } = useFetch()
    const username = useForm('text')
    const email = useForm('email')
    const password = useForm('password')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { url, options } = USER_POST({ username: username.value, email: email.value, password: password.value })
        const { response, json } = await request(url, options)

        if (response.ok) {
            userLogin(username.value, password.value)
        }

    }

    return (
        <section className="animeLeft">
            <Head  title="Criar Conta" description=""/>
            <h1 className='title'>Cadastre-se</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="E-mail" type="email" name="email" {...email} />
                <Input label="Senha" type="password" name="password" {...password} />
                <Button disabled={loading}>{loading ? 'Carregando...' : 'Cadastrar'}</Button>
                {error && (<Error error={error} />)}
            </form>
            <Link className={styles.esqueci} to="/login">Voltar ao Login</Link>
        </section>
    )
}

export default Register