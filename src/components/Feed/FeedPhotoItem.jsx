import React from 'react'
import styles from './FeedPhotoItem.module.css'


const FeedPhotoItem = ({ photo, setModalPhoto }) => {
    return (
        <li className={styles.photo} onClick={() => setModalPhoto(photo)}>
            <img src={photo.src} alt={photo.title} />
            <span className={styles.span}>{photo.acessos}</span>
        </li>
    )
}

export default FeedPhotoItem