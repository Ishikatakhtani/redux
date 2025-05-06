// import { createSlice } from "@reduxjs/toolkit";

// const todoslice=createSlice({
//     name:"todo",
//     initialState:{
//         task:[]
//     },
//     reducers:{
//         addtask:(state,actions)=>{
//             console.log(actions);
//             state.task.push(actions.payload);
//         }
//     }
// })
// export const{addtask}=todoslice.actions;
// export default todoslice.reducer;

// todoSlice.jsx

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    task: [],
  },

  reducers: {
    addTask: (state, actions) => {
      state.task.push(actions.payload);
    },
    RemoveTask: (state, actions) => {
      state.task = state.task.filter((key) => key.id != actions.payload.id);
    },
    taskComplete: (state, actions) => {
      for (var i = 0; i < state.task.length; i++) {
        if (state.task[i].id == actions.payload.id) {
          state.task[i].taskStatus = true;
        }
      }
    },
    taskInComplete: (state, actions) => {
      for (var i = 0; i < state.task.length; i++) {
        if (state.task[i].id == actions.payload.id) {
          state.task[i].taskStatus = false;
        }
      }
    },
    myEditSave: (state, actions) => {
      for (var i = 0; i < state.task.length; i++) {
        if (state.task[i].id == actions.payload.id) {
          state.task[i].work = actions.payload.work;
        }
      }
    },
  },
});

export const { addTask, RemoveTask, taskComplete, taskInComplete, myEditSave } =
  todoSlice.actions;
export default todoSlice.reducer;