import React from 'react'
import Feed from '../components/Feed/Feed'
import Head from '../helpers/Head'

const Home = () => {
    return (
        <section className='container mainContainer'>
            <Head  title="Fotos" description="Home do Site"/>
            <Feed />
        </section>
    )
}

export default Home