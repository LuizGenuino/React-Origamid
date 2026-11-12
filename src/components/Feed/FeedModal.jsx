import React, { useEffect } from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../hooks/useFetch'
import { PHOTO_GET } from '../../../api'
import Error from '../../helpers/Error'
import Loading from '../../helpers/Loading'
import PhotoContent from '../Photo/PhotoContent'


const FeedModal = ({ photo, setModalPhoto }) => {
    const { data, loading, error, request } = useFetch()

    useEffect(() => {
        if (!photo.id) return
        const { url, options } = PHOTO_GET(photo.id)
        request(url, options)
    }, [photo])

    const handleOutsideClick = (e) => {
        // e.target ---> elemento especifico clicado dentro do elemento pai (que chama a função)
        // e.currentTarget ---> elemento pai (que chama a função)

        if (e.target === e.currentTarget) { // o clique foi no elemento pai (e não nos filhos)
            setModalPhoto(null)
        }
    }

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && (<Error error={error} />)}
            {loading && (<Loading />)}
            {data && (<PhotoContent data={data} />)}
        </div>
    )
}

export default FeedModal