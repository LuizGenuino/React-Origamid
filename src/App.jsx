import { useEffect, useState } from "react"
import Button from "./Components/Button"
import Ref from "./Components/Ref"
import MemoAndCallBack from "./Components/MemoAndCallBack"


const App = () => {
    const booleanHook = useState(false)
    // desestruturado (padrao)
    const [active, setActive] = useState(false)

    const [count, setCount] = useState(1)
    const [items, setItems] = useState((currentState) => ['Item ' + (count)])

    const handleClick = () => {
        setCount(count + 1)
        setItems(currentState => {
            return [...currentState, 'Item ' + (count + 1)]
        })
    }

    // fora do useEffect: sempre ocorre na atualização de qualquer estado, mas antes dos hook
    // mudar um estado aqui gera um loop recursivo
    console.log("fora do useEffect: sempre ocorre na atualização de qualquer estado, mas antes dos hook\n\n")

    // executa ao criar o componente e a cada atualização do componente
    // mudar um estado aqui pode gerar um loop recursivo
    useEffect(() => {
        console.log('executa ao criar o componente e a cada atualização do componente\n\n')
    })

    // executa apenas ao criar o componente
    useEffect(() => {
        console.log('executa apenas ao criar o componente\n\n')
    }, [])

    // executa ao criar o componente e a cada atualização do estado Count
    useEffect(() =>  {
        console.log('executa ao criar o componente e a cada atualização do estado Count\n\n')
    }, [count])

    // executa ao criar o componente e ao desmontar ele (ex: trocar de tela)
    useEffect(() => {

        // so ocorre quando o elemento é desmontado
        return () => {
            console.log('executa ao sair da tela')
        }
    }, [])


    useEffect(() => {
        const handleScroll = (e) => {
            console.log("realizou Scroll no mouse",e)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('removeu scroll')
        }
    })

    return (
        <div style={{height: '200vh'}}>
            <p>App React</p>
            <section>
                <MemoAndCallBack />
            </section>
            <br></br>
            <section>
                <Ref />
            </section>
            <br></br>
            <section>
                <p>status 1: {booleanHook[0] ? 'Ativo' : 'Desativo'}</p>
                <p>status 2: {active ? 'Ativo' : 'Desativo'}</p>

                <button onClick={() => booleanHook[1](!booleanHook[0])} >Muda Status 1</button>
                <span> </span>
                <button onClick={() => setActive(!active)} >Muda Status 2</button>
                <br></br>
                <Button setState={booleanHook[1]} text="Botão Muda Status 1" />
                <span> </span>
                <Button setState={setActive} text="Botão Muda Status 2" />
            </section>
            <br></br>
            <section>
                <ul>
                    {items.map(item => (<li key={item}>{item}</li>))}
                </ul>
                <button onClick={handleClick}>{count}</button>
            </section>
        </div>
    )
}

export default App
