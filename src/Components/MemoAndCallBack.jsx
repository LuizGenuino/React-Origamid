import React, { useCallback, useMemo, useState } from 'react'

function operacaoLenta() {
    let c = 0

    for (let i = 0; i < 100000000; i++) {
        c = c + i + i / 2
    }

    return c
}

function MemoAndCallBack() {

    const [contar, setContar] = useState(0)

    // tempo em ms que demorou pra executar o codigo até esse momento
    const t1 = performance.now()

    // esse valor é chamado toda vez que o componente atualiza
    const valor = operacaoLenta()
    // executa apenas ao criar o componente (useMemo funciona exatamente como um useEffect, mas retornando um valor)
    const valor1 = useMemo(()=> operacaoLenta(), [])

    console.log("tempo em ms que demorou para executar essa função acima: ",performance.now() - t1)


    // a função é criada toda vez que o componente é atualizado
    const handleClick = () => {
        console.log("click")
    }

    // criado apenas na criação do componente (funciona exatamente como um useEffect com array de dependencia)
    const handleClickCallback = useCallback(()=> {
        console.log("click")
    }, [])


    return (
        <>
            <div>MemoAndCallBack</div>
            <button onClick={() => setContar(contar + 1)} >{contar}</button>
        </>
    )
}

export default MemoAndCallBack