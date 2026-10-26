import React, { useContext } from 'react'
import UserContext from '../userContext'
import { GlobalContext } from '../GlobalContext'

function Usuario() {
    const context = useContext(GlobalContext)
    console.log(context)
    return (
        <div>
            Usuario
            <p>usuario: {context.nome}</p>
            <p>contar: {context.contar}</p>
            <button onClick={() => context.zerarContador()}>Zerar contador global</button>
        </div>
    )
}

export default Usuario