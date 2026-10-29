import { useState } from "react"


const App = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [observation, setObservation] = useState('')
    const [items, setItems] = useState('')
    const [status, setStatus] = useState('')

    const [form, setForm] = useState({ name: '', email: '', observation: '', items: '', status: '' })

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
        <div style={{ display: 'flex', width: '97vw', justifyContent: 'space-between', padding: '10px' }}>
            <div style={{ width: '46vw' }}>
                <form onSubmit={handleSubmit}>
                    <h2>States Individuais por Campo</h2>

                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                    <p>valor: {name}</p>

                    <label htmlFor="name">Email</label>
                    <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <p>valor: {email}</p>


                    <label htmlFor="observation">Observação</label>
                    <textarea rows={4} id="observation" value={observation} onChange={e => setObservation(e.target.value)} />
                    <p>valor: {observation}</p>

                    <label htmlFor="items">Items</label>
                    <select rows={4} id="items" value={items} onChange={e => setItems(e.target.value)}>
                        <option disabled value="">Escolha...</option>
                        <option value="notebook">Notebook</option>
                        <option value="smartphone">Smartphone</option>
                        <option value="tablet">Tablet</option>
                    </select>
                    <p>valor: {items}</p>

                    <div style={{ display: 'block', width: '100%' }}>
                        <label>Status</label>
                        <label>
                            <input type="radio" value="comprador" name="status" onChange={e => setStatus(e.target.value)} />
                            Comprador
                        </label>
                        <label>
                            <input type="radio" value="vendedor" name="status" onChange={e => setStatus(e.target.value)} />
                            Vendedor
                        </label>
                        <p>valor: {status}</p>
                    </div>

                    <button>Enviar</button>
                </form>
            </div>
            <div style={{ width: '46vw' }}>
                <form onSubmit={handleSubmit}>
                    <h2>State de Objeto</h2>

                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" value={form.name} onChange={handleChange} />
                    <p>valor: {form.name}</p>

                    <label htmlFor="name">Email</label>
                    <input id="email" type="email" value={form.email} onChange={handleChange} />
                    <p>valor: {form.email}</p>

                    <label htmlFor="observation">Observação</label>
                    <textarea rows={4} id="observation" value={form.observation} onChange={handleChange} />
                    <p>valor: {form.observation}</p>

                    <label htmlFor="items">Items</label>
                    <select rows={4} id="items" value={form.items} onChange={handleChange}>
                        <option disabled value="">Escolha...</option>
                        <option value="notebook">Notebook</option>
                        <option value="smartphone">Smartphone</option>
                        <option value="tablet">Tablet</option>
                    </select>
                    <p>valor: {form.items}</p>

                    <div style={{ display: 'block', width: '100%' }}>
                        <label>Status</label>
                        <label>
                            <input type="radio" value="comprador" name="status" id="status" onChange={handleChange} />
                            Comprador
                        </label>
                        <label>
                            <input type="radio" value="vendedor" name="status" id="status" onChange={handleChange} />
                            Vendedor
                        </label>
                        <p>valor: {form.status}</p>
                    </div>


                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default App
