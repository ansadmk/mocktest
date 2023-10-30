import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Context } from "./context"

const Products = () => {
    const [state,setState]=useState('')
    const {state1,setState1}=useContext(Context)
    console.log(state);
    const nav=useNavigate()
    const handle =async()=>{
    
         const res= await axios.get('http://localhost:4000/products')
         setState(res)
        
   }
        
  return (
    <>
    <button onClick={()=>handle()}>show products</button>
    <div className='row gap-2 '>
    {state.data ? state?.data?.map(data=><div className='border container rounded-5 w-25 p-4 col-3' onClick={()=>{
        setState1(data)
        nav('/detail')
    }}><h1>{data.name} </h1><h2>{data.price}</h2><img className='rounded-3 img-fluid' src={data.image} alt="" /></div>):null}
    </div>
    </>
  )
}

export default Products