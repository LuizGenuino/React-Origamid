import { useState } from "react"
import Button from "./Components/Button"


const App = () => {
    const booleanHook = useState(false)
    // desestruturado (padrao)
    const [active, setActive] = useState(false)

    const [count, setCount] = useState(1)
    const [items, setItems] = useState(['Item 1'])

    const handleClick = () => {
        setCount(currentState => currentState + 1)
        setItems(currentState => {
            return [...currentState, 'Item ' + (count + 1)]
        })
    }

    return (
        <>
            <p>App React</p>
            <section>
                <p>status 1: {booleanHook[0] ? 'Ativo' : 'Desativo'}</p>
                <p>status 2: {active ? 'Ativo' : 'Desativo'}</p>

                <button onClick={() => booleanHook[1](!booleanHook[0])} >Muda Status 1</button>
                <span> </span>
                <button onClick={() => setActive(!active)} >Muda Status 2</button>
                <br />
                <br />
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
        </>
    )
}

export default App
