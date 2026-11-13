import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm'
import Input from '../../components/Forms/Input'
import Button from '../../components/Forms/Button'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { PASSWORD_RESET } from '../../../api'
import Error from '../../helpers/Error'


const ResetPass = () => {
    const [login, setLogin] = useState('')
    const [key, setKey] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const key = params.get('key')
        const login = params.get('login')
        if (key) setKey(key)
        if (login) setLogin(login)
    }, [])

    const password = useForm('text')
    const { data, loading, request, error } = useFetch()



    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({ login, key, password: password.value })
            const { response, json } = await request(url, options)
            console.log(json)
            if (response.ok) {
                navigate('/login')
            }
        }
    }
    return (
        <section className="animeLeft">
            <h1 className='title'>Inserir Nova Senha</h1>
            {data ?
                <p style={{ color: 'green', fontSize: '2rem', fontWeight: 'bold' }} >{data}</p>
                :
                (<form className={styles.form} onSubmit={handleSubmit}>
                    <Input label="Nova Senha" type="password" name="password" {...password} />
                    <Button disabled={loading}>{loading ? 'Carregando...' : 'Trocar Senha'}</Button>
                    {error && (<Error error={error} />)}
                </form>)}
            <Link className={styles.esqueci} to="/login">Voltar ao Login</Link>
        </section>
    )
}

export default ResetPass