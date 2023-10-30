import {createSlice} from '@reduxjs/toolkit'
const slice =createSlice({
    name:"list",
    initialState:{
        data:""
    },
    reducers:{
        setdata:(state,action)=>{
          state.data=action.payload
        }
    }
})
export const {setdata}=slice.actions
export const slice1 =slice.reducer