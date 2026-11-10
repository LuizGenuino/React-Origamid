import React, { useReducer } from 'react'

function redutor(state, action) {
    // forma mais comum
    switch (action) {
        case 'add':
            return state + 1
        case 'sub':
            return state - 1
        default:
            throw new Error()
    }

    // com if
    // if(action === 'add'){
    //     return state + 1
    // }
    // if(action === 'sub'){
    //     return state - 1
    // }
    // return new Error('Error Action não Existe')
}


const Reducer = () => {
    const [state, dispatch] = useReducer(redutor, 0)
    const [array, dispatchArray] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return [...state, action.payload]
            case 'remove':
                return state.filter((item, index) => item !== action.payload)
            default:
                throw new Error()
        }
    }, ['banana', 'uva', 'maçã'])



    return (
        <div>
            <h1>Reducer</h1>

            <p>{state}</p>
            <button onClick={() => dispatch('add')}>+</button>
            {" "}| {" "}
            <button onClick={() => dispatch('sub')}>-</button>
            <br />
            <button onClick={() => dispatch('outro')}>error</button>

            <p>Outro exemplo</p>
            
            <p>{JSON.stringify(array)}</p>
            <button onClick={() => dispatchArray({ type: 'remove', payload: 'banana' })} >Remove Banana</button>
            {" "}| {" "}
            <button onClick={() => dispatchArray({ type: 'add', payload: 'banana' })}>Adicionar Banana</button>
        </div>
    )
}

export default Reducer
