import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {


    return (
        <div>
            <nav>
                <Link to="/" >Home</Link> |
                <Link to="sobre/sadsa]?item=inicial&color=red">Sobre</Link> |
                <Link to="outros" >Outros</Link>
            </nav>
            <p>NavLink</p>
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="sobre/sadsa]?item=inicial&color=red">Sobre</NavLink> | 
                <NavLink to="outros">Outros</NavLink>

            </nav>
        </div>
    )
}

export default Home