import React, { useState } from 'react'

const types = {
    email: {
        regex: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        message: 'Email Invalido'
    },
    password: {
        regex: /^(?=.*[0-9])[a-zA-Z0-9]{8,16}$/,
        message: 'A Senha deve ter no minimo 8 caracteres!'
    }
}

const useForm = (type) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')


    function validate(value) {
        // sem validação
        if (!type) return true

        if (value.length === 0) {
            setError('O campo é Obrigatório')
            return false
        }

        if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message)
            return false
        }

        setError('')
        return true
    }

    function onChange({ target }) {
        // para a mensagem erro sumir sem precisar sair do campo (onBlur)
        if (error) {
            validate(target.value)
        }
        setValue(target.value)
    }

    return {
        value,
        error,
        setValue,
        onChange,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}

export default useForm