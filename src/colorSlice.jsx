import { createSlice } from "@reduxjs/toolkit";

const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"red"
    },
    reducers:{
        changeColor:(state, action)=>{
            console.log(action.payload);
            state.color=action.payload;
        }
    }
})
export const{changeColor}=colorSlice.actions;
export default colorSlice.reducer;