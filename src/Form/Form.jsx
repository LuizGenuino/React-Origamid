import React from 'react'
import Input from './Input'
import Button from './Button'

function Form() {

    const array = ['Item1', 'Item2']

    return (
        <div>
            <Input label="Email" id="email" type="text" required />
            <Input label="Senha" id="senha" type="password" required />
            <Button items={array} />
        </div>
    )
}

export default Form