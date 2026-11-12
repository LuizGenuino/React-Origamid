import React, { useContext, useEffect, useState } from 'react'
import Input from '../../components/Forms/Input'
import Button from '../../components/Forms/Button'
import useForm from '../../hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../../api'
import { UserContext } from '../../contexts/UserContext'
import Error from '../../components/helpers/Error'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import stylesBtn from '../../components/Forms/Button.module.css'


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
        <section className="animeLeft">
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                <Button disabled={context.loading}>{context.loading ? 'Carregando...' : 'Entrar'}</Button>
                {context.error && (<Error error={context.error} />)}
            </form>
            <Link className={styles.esqueci} to="/login/esqueci">Esqueci minha senha</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p >Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to="/login/registrar">Cadastre-se</Link>
            </div>
        </section>
    )
}

export default Login