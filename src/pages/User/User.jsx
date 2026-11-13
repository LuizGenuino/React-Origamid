import React, { useContext } from 'react'
import UserHeader from './UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../../components/Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../../contexts/UserContext'

const User = () => {
    const { data } = useContext(UserContext)
    return (
        <section className='container' >
            <UserHeader />
            <Routes>
                <Route path='' element={<Feed user={data.id} />} />
                <Route path='postar' element={<UserPhotoPost />} />
                <Route path='estatisticas' element={<UserStats />} />
            </Routes>
        </section>
    )
}

export default User