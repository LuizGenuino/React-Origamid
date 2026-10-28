import { useState } from "react"


const App = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [observation, setObservation] = useState('')

    const [form, setForm] = useState({ name: '', email: '', observation: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        console.log(name, email, form)

    }

    const handleChange = ({ target }) => {
        const { id, value } = target
        setForm({ ...form, [id]: value })

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>States Individuais por Campo</h2>
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="name">Email</label>
                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="observation">Observação</label>
                <textarea rows={4} id="observation" type="email" value={observation} onChange={e => setObservation(e.target.value)} />
                <button>Enviar</button>
            </form>
            <br></br>
            <form onSubmit={handleSubmit}>
                <h2>State de Objeto</h2>
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" value={form.name} onChange={handleChange} />
                <label htmlFor="name">Email</label>
                <input id="email" type="email" value={form.email} onChange={handleChange} />
                <label htmlFor="observation">Observação</label>
                <textarea rows={4} id="observation" type="email" value={form.observation} onChange={handleChange} />
                <button>Enviar</button>
            </form>
        </>
    )
}

export default App
