import React, { useEffect, useState } from 'react'
import UserNavHeader from '../../components/UserNavHeader'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'


const UserHeader = () => {
    const [title, setTitle] = useState('')
    const location = useLocation()

    useEffect(() => {

        if (location.pathname.includes('estatisticas')) {
            setTitle('Estatisticas')
            return
        }
        if (location.pathname.includes('postar')) {
            setTitle('Postar')
            return
        }
        setTitle('Minha Conta')
    }, [location])

    return (
        <header className={styles.header}>
            <h1 className='title' >{title}</h1>
            <UserNavHeader />
        </header>
    )
}

export default UserHeader