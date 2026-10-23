import { useState } from "react"


const App = () => {
    const booleanHook = useState(false)
    const [active, setActive] = useState(false)

    console.log(booleanHook)

    return (
        <>
            <p>App React</p>
            <p>status 1: {booleanHook[0] ? 'Ativo' : 'Desativo'}</p>
            <p>status 2: {active ? 'Ativo' : 'Desativo'}</p>

            <button onClick={() => booleanHook[1](!booleanHook[0])} >Muda Status 1</button>
            <span> </span>
            <button onClick={() => setActive(!active)} >Muda Status 2</button>

        </>
    )
}

export default App
