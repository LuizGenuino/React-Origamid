import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Sobre = () => {

    
    const params = useParams()
    const location = useLocation()

    console.log(params)
    console.log(location)

  return (
    <div>Sobre</div>
  )
}

export default Sobre