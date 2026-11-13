import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../components/Feed/Feed'
import Head from '../helpers/Head'

const UserProfile = () => {
    const { user } = useParams()
    return (
        <section className='container mainContainer'>
            <Head  title={user} description="Perfil do usuario"/>
            <h1 className='title'>{user}</h1>
            <Feed user={user} />
        </section>
    )
}

export default UserProfile