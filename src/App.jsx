import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Auth/Auth"
import { UserStorage } from "./contexts/UserContext"
import User from "./pages/User/User"
import ProtectedRouter from "./helpers/ProtectedRouter"
import Photo from "./pages/Photo"
import UserProfile from "./pages/UserProfile"

const App = () => {

    return (
        <>
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login/*" element={<Login />} />
                        <Route path="conta/*" element={<ProtectedRouter><User /></ProtectedRouter>} />
                        <Route path="foto/:id" element={<Photo />} />
                        <Route path="perfil/:user" element={<UserProfile />} />
                    </Routes>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </>
    )
}

export default App
