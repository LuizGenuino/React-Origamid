import React, { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dogs from '../assets/dogs.svg?react';
import { UserContext } from '../contexts/UserContext';

const Header = () => {
    const context = useContext(UserContext)
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to="/conta" aria-label='Dogs - Home'><Dogs /></Link>

                {context.data && context.data.email ? (
                    <Link className={styles.login} to="/conta">{context.data.nome}</Link>
                ) : (

                    <Link className={styles.login} to="/login">Login / Criar</Link>
                )}

            </nav>
        </header>
    )
}

export default Header