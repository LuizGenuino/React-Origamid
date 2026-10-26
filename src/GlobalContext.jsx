import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalStorage = ({ children }) => {

    const [contar, setContar] = useState(0)

    const zerarContador = () => {
        setContar(0)
    }

    return (
        <GlobalContext.Provider value={{ nome: "Luiz", contar, setContar, zerarContador }}>
            {children}
        </GlobalContext.Provider>
    )
}