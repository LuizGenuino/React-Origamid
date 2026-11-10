import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="sobre" element={<Sobre/>} />
                <Route path="sobre/:id" element={<Sobre/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
