import React, { useContext } from 'react'
import UserContext from '../userContext'

function Usuario() {
    const context = useContext(UserContext)
    console.log(context)
    return (
        <div>
            Usuario
            <p>usuario: {context.nome}</p>
        </div>
    )
}

export default Usuario