import React, { useState } from 'react'
import Enviar from '../../assets/enviar.svg?react';
import useFetch from '../../hooks/useFetch';
import Error from '../../helpers/Error';
import { COMMENT_POST } from '../../../api';
import styles from './PhotoCommentsForm.module.css'


const PhotoCommentsForm = ({ id, setCommentsList, single }) => {
    const [comment, setComment] = useState()
    const { error, request } = useFetch()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const token = localStorage.getItem('dog@token')
        const { url, options } = COMMENT_POST(id, { comment }, token)
        const { response, json } = await request(url, options)

        if (response.ok) {
            setCommentsList(comments => [...comments, json])
            setComment('')
        }
    }


    return (
        <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>

            <textarea
                className={styles.textarea}
                placeholder='Comente...'
                name="comment"
                id="comment"
                value={comment}
                onChange={({ target }) => setComment(target.value)}
            />


            <button className={styles.button}>
                <Enviar />
            </button>
            {error && (<Error error={error} />)}
        </form>
    )
}

export default PhotoCommentsForm