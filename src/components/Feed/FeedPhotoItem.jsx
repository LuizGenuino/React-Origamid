import React from 'react'
import styles from './FeedPhotoItem.module.css'
import Image from '../../helpers/Image'


const FeedPhotoItem = ({ photo, setModalPhoto }) => {
    return (
        <li className={styles.photo} onClick={() => setModalPhoto(photo)}>
            <Image src={photo.src} alt={photo.title} />
            <span className={styles.span}>{photo.acessos}</span>
        </li>
    )
}

export default FeedPhotoItem