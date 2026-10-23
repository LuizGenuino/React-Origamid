import React from 'react'

function Button({state, setState, text}) {
  return (
     <button onClick={() => setState(!state)} >{text}</button>
  )
}

export default Button