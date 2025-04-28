import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./counterslice"
const store=configureStore({
    reducer:{
//this is fixed  way to write 

mycounter:myreducer
    }
})

export default store;