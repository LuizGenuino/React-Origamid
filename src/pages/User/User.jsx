import React, { useContext } from 'react'
import UserHeader from './UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../../components/Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../../contexts/UserContext'
import NotFound from '../NotFound'
import Head from '../../helpers/Head'

const User = () => {
    const { data } = useContext(UserContext)
    return (
        <section className='container' >
            <Head  title="Minha Conta" description=""/>
            <UserHeader />
            <Routes>
                <Route path='' element={<Feed user={data.id} />} />
                <Route path='postar' element={<UserPhotoPost />} />
                <Route path='estatisticas' element={<UserStats />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </section>
    )
}

export default User