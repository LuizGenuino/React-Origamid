import React, { useState } from 'react'

const types = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: 'Cep Invalido!',
    },
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email Invalido!'
    }
}

const useForm = (type) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)

    const validate = (value) => {
        if (value.length === 0) {
            setError("Preencha um valor valido")
            return false
        }
        if (!types[type].regex.test(value)) {
            setError(types[type].message)
            return false
        }
        setError('')
        return true
    }

    const onChange = ({ target }) => {
        if (error) validate(target.value)
        setValue(target.value)
    }

    return {
        value,
        error,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value)
    }
}

export default useForm