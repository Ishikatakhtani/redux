//day  4
//todo app
// import { createSlice } from "@reduxjs/toolkit";
// const todosliceapp=createSlice({
//     name:"todo",
//     initialState:{
//         task:[]
//     },
//     reducers:{
//         // addTask:(state,actions)=>{}
//         //     console.log(actions);
//         //     console.log(actions.payload.id);
//         //     state.task=state.task.filter(function(key){
//         //         if(key.id==actions.payload.id){
//         //             return false;
//         //         }
//         //         else{
//         //             return true;
//         //         }
//         //     })
//             // state.task.push(actions.payload); 
//             addTask:(state,actions)=>{
//                 state.task.push(actions.payload);
//                 console.log(actions);
//             },
//             removeTask:(state,actions)=>{
//                 state.task=state.task.filter(item=>item.id!=actions.payload.id)
//             },
//             remByIndex:(state,actions)=>{
//                 state.task.splice(actions.payload.id,1);
//                 console.log(actions.payload.id);
//             }
//         }
    
// })
// export const{addTask,remByIndex,removeTask}=todosliceapp.actions;
// export default todosliceapp.reducer;

//day5 
//complete todo app
// todoSlice.jsx

// import { createSlice } from "@reduxjs/toolkit";

// const todosliceapp = createSlice({
//   name: "todo",
//   initialState: {
//     task: [],
//   },

//   reducers: {
//     addTask: (state, actions) => {
//       state.task.push(actions.payload);
//     },
//     RemoveTask: (state, actions) => {
//       state.task = state.task.filter((key) => key.id != actions.payload.id);
//     },
//     taskComplete: (state, actions) => {
//       for (var i = 0; i < state.task.length; i++) {
//         if (state.task[i].id == actions.payload.id) {
//           state.task[i].taskStatus = true;
//         }
//       }
//     },
//     taskInComplete: (state, actions) => {
//       for (var i = 0; i < state.task.length; i++) {
//         if (state.task[i].id == actions.payload.id) {
//           state.task[i].taskStatus = false;
//         }
//       }
//     },
//     myEditSave: (state, actions) => {
//       for (var i = 0; i < state.task.length; i++) {
//         if (state.task[i].id == actions.payload.id) {
//           state.task[i].work = actions.payload.work;
//         }
//       }
//     },
//   },
// });

// export const { addTask, RemoveTask, taskComplete, taskInComplete, myEditSave } =
//   todosliceapp.actions;
// export default todosliceapp.reducer;