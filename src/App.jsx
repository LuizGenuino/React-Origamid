import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import { lazy, Suspense } from "react"

const LazySuspense = lazy(() => import('./pages/LazyAndSuspense'))


const App = () => {

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Carregando....</div>} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="sobre/:id" element={<Sobre />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="outros" element={<LazySuspense />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
