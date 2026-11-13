import useForm from '../../hooks/useForm'
import Input from '../../components/Forms/Input'
import Button from '../../components/Forms/Button'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { PASSWORD_LOST } from '../../../api'
import Error from '../../helpers/Error'


const ForgotPass = () => {
    const login = useForm('text')
    const { data, loading, request, error } = useFetch()



    const handleSubmit = async (e) => {
        e.preventDefault()
        if (login.validate()) {
            const { url, options } = PASSWORD_LOST({ login: login.value, url: window.location.href.replace('esqueci', 'resetar') })
            const { response, json } = await request(url, options)
            console.log(json)
            if (response.ok) {
            }
        }
    }
    return (
        <section className="animeLeft">
            <h1 className='title'>Perdeu a Senha?</h1>
            {data ?
                <p style={{ color: 'green', fontSize: '2rem', fontWeight: 'bold' }} >{data}</p>
                :
                (<form className={styles.form} onSubmit={handleSubmit}>
                    <Input label="Email/Usuário" type="text" name="login" {...login} />
                    <Button disabled={loading}>{loading ? 'Carregando...' : 'Enviar Email'}</Button>
                    {error && (<Error error={error} />)}
                </form>)}
            <Link className={styles.esqueci} to="/login">Voltar ao Login</Link>
        </section>
    )
}

export default ForgotPass