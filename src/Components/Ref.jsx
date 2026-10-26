import React, { useEffect, useRef, useState } from 'react'

function Ref() {
    const video = useRef()

    const [comentario, setComentario] = useState([])
    const [input, setInput] = useState('')
    const inputElement = useRef('')

    // aparece undefined pois essa linha executa antes do carregamento completo do componente
    console.log(video.current, "aparece undefined pois essa linha executa antes do carregamento completo do component")

    useEffect(() => {
        // useEffect executa apos o carregamento completo do componente
        console.log(video.current)
    }, [])

    const handleClick = () => {
        // setComentario([...comentario, input])
        // setInput('')
        setComentario([...comentario,  inputElement.current.value])
        inputElement.current.value = ""
        // com o ref tem acesso a todos os metodos e funções do elemento referenciado. funcionando como o element.target
        inputElement.current.focus()
    }

    return (
        <>
            <div ref={video}>Ref</div>
            <div>
                <ul>
                    {comentario.map((com, index) => (
                        <li key={index}>{com}</li>
                    ))}
                </ul>
            </div>
                {/* <input ref={inputElement} type="text" value={input} onChange={e => setInput(e.target.value)}/> */}
                <input ref={inputElement} type="text"/>

                <br />
                <button onClick={handleClick}>Enviar</button>
        </>
    )
}

export default Ref