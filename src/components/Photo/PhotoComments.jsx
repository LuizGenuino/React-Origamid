import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import styles from './PhotoComments.module.css'


const PhotoComments = ({ id, comments, single }) => {
    const [commentsList, setCommentsList] = useState(() => comments)
    const { login } = useContext(UserContext)
    const commentsSection = useRef(null)

    useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight // move o scroll para o maximo de scroll do componente
    }, [commentsList])

    return (
        <>
            <ul ref={commentsSection} className={`${styles.comments} ${single ? styles.single : ''}`}>
                {commentsList.map(comment => <li key={comment.comment_ID}>
                    <b>{comment.comment_author}:</b>
                    <span>{comment.comment_content}</span>
                </li>)}
            </ul>
            {login && <PhotoCommentsForm id={id} setCommentsList={setCommentsList} single />}
        </>
    )
}

export default PhotoComments