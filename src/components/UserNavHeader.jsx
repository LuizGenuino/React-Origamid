import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import MinhasFotos from '../assets/feed.svg?react';
import Estatisticas from '../assets/estatisticas.svg?react';
import Adicionar from '../assets/adicionar.svg?react';
import Sair from '../assets/sair.svg?react';
import styles from './UserNavHeader.module.css'


const UserNavHeader = () => {
    const { userLogout } = useContext(UserContext)
    const [mobile, setMobile] = useState(null)


    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end defaultChecked><MinhasFotos />{mobile && 'Minhas Fotos'}</NavLink>
            <NavLink to="/conta/estatisticas"><Estatisticas />{mobile && 'Estatisticas'}</NavLink>
            <NavLink to="/conta/postar"><Adicionar />{mobile && 'Adicionar Foto'}</NavLink>
            <button onClick={userLogout}><Sair /> {mobile && 'Sair'}</button>
        </nav>
    )
}

export default UserNavHeader