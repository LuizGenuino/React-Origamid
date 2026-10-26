import React, { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useFetch from '../hooks/useFetch'

const CustomHook = () => {

    const [produto, setProduto] = useLocalStorage('produto', '')
    const { data, loading, error, request } = useFetch()

    const handleClick = (e) => {
        setProduto(e.target.innerText)
    }

    useEffect(() => {
        request('https://ranekapi.origamid.dev/json/api/produto/')
    }, [])

    console.log(data)

    return (
        <>
            <div>Usando CustomHook</div>
            <p>Produto preferido: {produto}</p>
            <button onClick={handleClick}>Notebook</button> <span></span>
            <button onClick={handleClick}>Celular</button>

            {loading && ((<p>Carregando...</p>))   }
            {data && data.map(prod => (
                <div key={prod.id}>
                    <h1>{prod.nome}</h1>
                </div>
            ))}
            {error && (<p>{error}</p>)}
        </>
    )
}

export default CustomHook