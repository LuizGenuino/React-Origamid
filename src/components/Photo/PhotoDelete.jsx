import React from 'react'
import styles from './PhotoDelete.module.css'
import useFetch from '../../hooks/useFetch'
import { PHOTO_DELETE } from '../../../api'


const PhotoDelete = ({ id }) => {
    const { loading, request } = useFetch()

    const handleClick = async () => {
        const confirm = window.confirm('Deseja Deletar a Foto?')
        if (!confirm) return
        const token = localStorage.getItem('dog@token')
        const { url, options } = PHOTO_DELETE(id, token)
        const { response } = await request(url, options)

        if (response.ok) {
            location.reload()
        }
    }

    return (
            <button className={styles.delete} onClick={handleClick}>{loading ? 'Carregando...' : 'Deletar'}</button>
    )
}

export default PhotoDelete