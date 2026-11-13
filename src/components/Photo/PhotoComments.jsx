import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'


const PhotoComments = ({ id, comments }) => {
    const [commentsList, setCommentsList] = useState(() => comments)
    const { login } = useContext(UserContext)

    return (
        <>
            <ul className={styles.comments}>
                {commentsList.map(comment => <li key={comment.comment_ID}>
                    <b>{comment.comment_author}:</b>
                    <span>{comment.comment_content}</span>
                </li>)}
            </ul>
            {login && <PhotoCommentsForm id={id} setCommentsList={setCommentsList}/>}
        </>
    )
}

export default PhotoComments