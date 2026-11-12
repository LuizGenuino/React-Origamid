import React, { useEffect } from 'react'
import styles from './FeedPhotos.module.css'
import useFetch from '../../hooks/useFetch'
import { PHOTO_GET } from '../../../api'
import Error from '../../helpers/Error'
import Loading from '../../helpers/Loading'
import PhotoContent from '../Photo/PhotoContent'


const FeedModal = ({photo}) => {
    const { data, loading, error, request } = useFetch()

    useEffect(() => {
        if(!photo.id) return
        const {url, options} = PHOTO_GET(photo.id)
        request(url, options)
    }, [photo])

    return (
        <div className={styles.modal}>
            {error && (<Error error={error} />)}
            {loading && (<Loading  />)}
            {data && (<PhotoContent data={data}/>)}
        </div>
    )
}

export default FeedModal