import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import { lazy, Suspense } from "react"

const LazySuspense = lazy(() => import('./pages/LazyAndSuspense'))
const Reducer = lazy(() => import('./pages/Reducer'))



const App = () => {

    return (
        <BrowserRouter>
            <Suspense fallback={<div>Carregando....</div>} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="sobre/:id" element={<Sobre />} />
                    <Route path="outros" element={<LazySuspense />} />
                    <Route path="reducer" element={<Reducer />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
