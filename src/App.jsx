import { useState } from "react"
import Button from "./Components/Button"


const App = () => {
    const booleanHook = useState(false)
    // desestruturado (padrao)
    const [active, setActive] = useState(false)

    return (
        <>
            <p>App React</p>
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

        </>
    )
}

export default App
