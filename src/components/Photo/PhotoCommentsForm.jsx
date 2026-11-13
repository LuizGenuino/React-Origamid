import React, { useState } from 'react'
import Enviar from '../../assets/enviar.svg?react';
import useFetch from '../../hooks/useFetch';
import Error from '../../helpers/Error';
import { COMMENT_POST } from '../../../api';

const PhotoCommentsForm = ({ id, setCommentsList}) => {
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
        <form onSubmit={handleSubmit}>
            <label htmlFor="comment">Comantario</label>
            <textarea
                placeholder='Comente...'
                name="comment"
                id="comment"
                value={comment}
                rows={4}
                onChange={({ target }) => setComment(target.value)} />
            <button>
                <Enviar />
            </button>
            {error && (<Error error={error} />)}
        </form>
    )
}

export default PhotoCommentsForm