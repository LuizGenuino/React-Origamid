import React, { useEffect } from 'react'

function LazyAndSuspense() {
    return (
        <div>
            LazyAndSuspense
            <p>Lazy = importa o componente apenas quando for acessar a rota,
                evitando paginas e importações desnecessarias, utlizado quando paginas
                de pouco acesso tem importações de bibliotecas pesadas</p>
            <p>Suspense = componente de loading, para o carregamento das paginas</p>
        </div>
    )
}

export default LazyAndSuspense