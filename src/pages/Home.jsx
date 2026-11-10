import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import HeaderMemo from '../components/HeaderMemo'

const Home = () => {

    const [contar, setContar] = useState(0)

    return (
        <div>
            <Header />
            <HeaderMemo />

            <button 
            onClick={() => setContar(contar + 1)} 
            style={{ margin: 12, padding: 12, background: 'tomato', border: 'none', borderRadius: 5, color: 'white' }}>
                Atualiza Pai ({contar})
                </button>
            <p>Quando o componente Pai atualiza, todos os filhos tambem atualizam</p>
            <nav>
                <Link to="/" >Home</Link> |
                <Link to="sobre/sadsa]?item=inicial&color=red">Sobre</Link> |
                <Link to="reducer" >Reducer</Link> |
                <Link to="outros" >Outros</Link>
            </nav>
            <p>NavLink</p>
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="sobre/sadsa]?item=inicial&color=red">Sobre</NavLink> |
                <NavLink to="reducer" >Reducer</NavLink> |
                <NavLink to="outros">Outros</NavLink>

            </nav>
        </div>
    )
}

export default Home