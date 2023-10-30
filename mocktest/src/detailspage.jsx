import React, { useContext } from 'react'
import { Context } from './context'

const detailspage = () => {
    const {state1}=useContext(Context)
  return (
    <div className='d-flex flex-column justify-content-center  align-items-center h-100 container w-50 '><h1>{state1.name}</h1><img src={state1.image} alt="" /><h2>{state1.price}</h2></div>
  )
}

export default detailspage