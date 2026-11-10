import React from 'react'
import { Link, NavLink} from 'react-router-dom'

const Home = () => {


    return (
        <div>
           <nav>
             <Link to="/">Home</Link> |
            <Link to="sobre/sadsa]?item=inicial&color=red">Sobre</Link>
           </nav>
           <p>NavLink tem a opção s</p>
             <nav>
             <NavLink to="/"  activeStyle={{color: 'tomato'}} end>Home</NavLink> |
            <NavLink to="sobre/sadsa]?item=inicial&color=red">Sobre</NavLink>
           </nav>
        </div>
    )
}

export default Home