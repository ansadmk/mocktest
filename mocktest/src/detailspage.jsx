import React, { useContext } from 'react'
import { Context } from './context'
import {useSelector} from "react-redux"
const detailspage = () => {
    const {state1}=useContext(Context)
    const data=useSelector(s=>s.data.data)
  return (
    <div className='d-flex flex-column justify-content-center  align-items-center h-100 container w-50 '><h1>{data.name}</h1><img src={data.image} alt="" /><h2>{data.price}</h2></div>
  )
}

export default detailspage