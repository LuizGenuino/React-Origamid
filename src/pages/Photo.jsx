import React, { useEffect } from 'react'
import styles from './Photo.module.css'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { PHOTO_GET } from '../../api'
import Error from '../helpers/Error'
import Loading from '../helpers/Loading'
import PhotoContent from '../components/Photo/PhotoContent'
import Head from '../helpers/Head'


const Photo = () => {
    const { id } = useParams()
    const { data, loading, error, request } = useFetch()

    useEffect(() => {
        const { url, options } = PHOTO_GET(id)
        request(url, options)

    }, [id])

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data) {
        return (
            <section className='container mainContainer'>
            <Head  title={data.photo.title} description=""/>
                <PhotoContent data={data} single/>
            </section>
        )
    }

    return null
}

export default Photo