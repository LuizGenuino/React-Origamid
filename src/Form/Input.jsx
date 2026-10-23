import React from 'react'

function Input({ label, id, required, ...props }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} {...props}/>
        </div>
    )
}

export default Input