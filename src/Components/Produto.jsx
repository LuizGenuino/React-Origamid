import React, { useContext } from 'react'
import UserContext from '../userContext'
import { GlobalContext } from '../GlobalContext'

function Produto() {
    const context = useContext(GlobalContext)
    console.log(context)
    return (
        <div>
            Produto
            <p>usuario: {context.nome}</p>
            <button onClick={() => context.setContar(e => e+1)} >add Global</button>
        </div>
    )
}

export default Produto