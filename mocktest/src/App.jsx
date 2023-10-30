
import Products from "./products"
import {Route,Routes} from 'react-router-dom'
import Detail from './detailspage'
import { useContext, useState } from "react"
import { Context } from "./context"
function App() {
  
   const [state1,setState1]=useState('')
    

  return (
    <Context.Provider value={{state1,setState1}}>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/detail' element={<Detail/>}/>
      
      
    </Routes>
    </Context.Provider>
     
    
  )
}

export default App
