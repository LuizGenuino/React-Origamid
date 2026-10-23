import Header from "./components/Header"
import Home from "./components/Home"
import Products from "./components/Products"
import Form from "./Form/Form"


const App = () => {
    const { pathname } = window.location
    
    console.log(pathname)

    let Pagina = pathname === '/produtos' ? Products : Home

    return (
        <>
            <section>
                <Header />
                <Pagina />
            </section>

            <br /><br /><br />

            <section>
                <Form />
            </section>
        </>
    )
}

export default App
