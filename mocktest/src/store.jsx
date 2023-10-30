import {configureStore} from "@reduxjs/toolkit"
import {slice1} from "./slice"

export const store=configureStore({
    reducer:{
        data:slice1
    }
})