import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import MinhasFotos from '../assets/feed.svg?react';
import Estatisticas from '../assets/estatisticas.svg?react';
import Adicionar from '../assets/adicionar.svg?react';
import Sair from '../assets/sair.svg?react';
import styles from './UserNavHeader.module.css'
import useMedia from '../hooks/useMedia';


const UserNavHeader = () => {
    const { userLogout } = useContext(UserContext)
    const location = useLocation()
    const [mobileMenu, setMobileMenu] = useState(false)

    const mobile = useMedia('(max-width: 40rem')

    useEffect(() => {
        setMobileMenu(false)
    }, [location])

    return (
        <>
            {mobile &&
                <button
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                    aria-label='Menu'
                    onClick={() => setMobileMenu(!mobileMenu)} ></button>
            }
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
                <NavLink to="/conta" end defaultChecked><MinhasFotos />{mobile && 'Minhas Fotos'}</NavLink>
                <NavLink to="/conta/estatisticas"><Estatisticas />{mobile && 'Estatisticas'}</NavLink>
                <NavLink to="/conta/postar"><Adicionar />{mobile && 'Adicionar Foto'}</NavLink>
                <button onClick={userLogout}><Sair /> {mobile && 'Sair'}</button>
            </nav>
        </>
    )
}

export default UserNavHeader