import React, { useEffect } from 'react'
import FeedPhotoItem from './FeedPhotoItem'
import useFetch from '../../hooks/useFetch'
import { PHOTOS_GET } from '../../../api'
import Error from '../../helpers/Error'
import Loading from '../../helpers/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
    const { data, loading, error, request } = useFetch()

    useEffect(() => {
        async function fetchPhotos() {
            const total = 6
            const { url, options } = PHOTOS_GET({ page: page, total, user: user || 0 })
            const { response, json } = await request(url, options)
            if (response && response.ok && json.length < total) {
                setInfinite(false)
            }
        }
        fetchPhotos()
    }, [])


    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data) {
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map(photo => <FeedPhotoItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />)}
            </ul>
        )
    }

    return null
}

export default FeedPhotos