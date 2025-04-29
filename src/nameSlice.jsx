import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
    name:"myname",
    initialState:{
        user:"Ishika"
        
    },
    reducers:{
        changeName:(state)=>{
            state.user="Jia";
        }
    }
})
export const {changeName} = nameSlice.actions;
export default nameSlice.reducer;