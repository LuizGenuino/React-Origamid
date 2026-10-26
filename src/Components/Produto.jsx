import React, { useContext } from 'react'
import UserContext from '../userContext'

function Produto() {
    const context = useContext(UserContext)
    console.log(context)
    return (
        <div>
            Produto
            <p>usuario: {context.nome}</p>
        </div>
    )
}

export default Produto