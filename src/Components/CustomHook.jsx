import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const CustomHook = () => {

    const [produto, setProduto] = useLocalStorage('produto', '')

    const handleClick = (e) => {
       setProduto(e.target.innerText) 
    }

    return (
        <>
            <div>Usando CustomHook</div>
            <p>Produto preferido: {produto}</p>
            <button onClick={handleClick}>Notebook</button> <span></span>
            <button onClick={handleClick}>Celular</button>
        </>
    )
}

export default CustomHook