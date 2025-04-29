// import { configureStore } from "@reduxjs/toolkit";
// import myreducer from "./counterslice"
// const store=configureStore({
//     reducer:{
// //this is fixed  way to write 

// mycounter:myreducer
//     }
// })

// export default store;

//DAY 2 
import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./nameSlice"; 

const store= configureStore({
    reducer:{
        myname:nameReducer 
    }
})
export default store;