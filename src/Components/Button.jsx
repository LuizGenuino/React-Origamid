import React from 'react'

function Button({ setState, text}) {
  return (
    // a função atualizadora armazena o valor do estado
     <button onClick={() => setState((currentState) => !currentState)} >{text}</button>
  )
}

export default Button