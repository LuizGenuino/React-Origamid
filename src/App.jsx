import { useState } from "react"
import Button from "./Components/Button"
import Ref from "./Components/Ref"
import MemoAndCallBack from "./Components/MemoAndCallBack"
import UserContext from "./userContext"
import Produto from "./Components/Produto"
import Usuario from "./Components/Usuario"
import { GlobalStorage } from "./GlobalContext"
import Effect from "./Components/EffectAndStates"
import CustomHook from "./Components/CustomHook"


const App = () => {
    const booleanHook = useState(false)
    // desestruturado (padrao)
    const [active, setActive] = useState(false)

    return (
        <div>
            <p>App React</p>
             <br></br>
            <section>
                <CustomHook/>
            </section>
            <br></br>
            <section>
                <p>Usando o UseContext</p>
                <GlobalStorage>
                    <Usuario />
                    <Produto />
                </GlobalStorage>
            </section>
            {/* <br></br>
            <section>
                <p>Usando o UseContext</p>
                <UserContext.Provider value={{ nome: "Luiz" }}>
                    <Produto />
                    <Usuario />
                </UserContext.Provider>
            </section> */}
            <br></br>
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
                <Effect />
             </section>
        </div>
    )
}

export default App
