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
// import { configureStore } from "@reduxjs/toolkit";
// import nameReducer from "./nameSlice"; 

// const store= configureStore({
//     reducer:{
//         myname:nameReducer 
//     }
// })
// export default store;

//DAY 3
//ses colorslice.jsx
// import { configureStore } from "@reduxjs/toolkit";
// import colorReduer from "./colorSlice"
// const store= configureStore({
//     reducer:{
//        mycolor:colorReduer
//     }
// })
// export default store;

//todo
//uses todoslice.jsx
// import { configureStore } from "@reduxjs/toolkit";
// import todoReduer from "./todoslice"
// const store= configureStore({
//     reducer:{
//        todo:todoReduer
//     }
// })
// export default store;

//DAY4 
//TODO APP
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosliceapp";
const store =configureStore({
    reducer:{
        todo:todoReducer
    }
})
export default store;