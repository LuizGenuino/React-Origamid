import React, { useState } from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../../components/Forms/Input'
import Button from '../../components/Forms/Button'
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import { PHOTO_POST } from '../../../api'
import Error from '../../helpers/Error'
import { useNavigate } from 'react-router-dom'
import Head from '../../helpers/Head'


const UserPhotoPost = () => {
    const navigate = useNavigate()
    const nome = useForm('text')
    const peso = useForm('number')
    const idade = useForm('number')
    const { data, loading, error, request } = useFetch()

    const [img, setImg] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("img", img.raw)
        formData.append('nome', nome.value)
        formData.append('peso', peso.value)
        formData.append('idade', idade.value)

        const token = localStorage.getItem('dog@token')
        const { url, options } = PHOTO_POST(formData, token)
        const { response, json } = await request(url, options)

        if (response.ok) {
            navigate('/conta')
        }
    }

    const handleImgChange = ({ target }) => {
        setImg({
            raw: target.files[0],
            preview: URL.createObjectURL(target.files[0])
        })
    }

    return (
        <section className={`${styles.photoPost} animeLetf`}>
            <Head  title="Postar Fotos" description="Postar uma Foto"/>
            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" name="nome" {...nome} />
                <Input label="Peso" type="number" name="peso" {...peso} />
                <Input label="Idade" type="number" name="idade" {...idade} />
                <input className={styles.file} type='file' name='img' id='img' onChange={handleImgChange} />
                <Button disabled={loading}>{loading ? 'Carregando...' : 'Enviar'}</Button>
                {error && (<Error error={error} />)}
            </form>
            {img.preview && <div className={styles.preview} style={{ backgroundImage: `url(${img.preview})` }}></div>}
        </section>
    )
}

export default UserPhotoPost