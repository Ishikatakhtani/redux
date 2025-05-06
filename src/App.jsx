// import { increment, decrement } from "./counterslice";
// import { useSelector, useDispatch } from "react-redux";

// const App=()=>{
  // IT USES COUNTERSLICE 
//   const cnt=useSelector((state)=>state.mycounter.count);
//   const dispatch=useDispatch();
//   return(
//     <>
//       <h1>Welcome to App compo</h1>
//       <button onClick={()=>dispatch(increment())}>Increment</button>
//       <h1>{cnt}</h1>
//       <button onClick={()=>dispatch(decrement())}>Decrement</button>
     
//     </>
//     )
// }
// export default App;

//DAY 2 REDUX TOOLKIT 
 //IT USES NAMESLICER
//  import { changeName } from "./nameSlice";
// import { useSelector, useDispatch } from "react-redux";
// const App=()=>{
//   const usrname=useSelector((state)=>state.myname.user);
//   const dispatch=useDispatch();
  
//   return(
//     <>
//     <h1>Welcome {usrname} !</h1>
//       <button onClick={()=>dispatch(changeName())}>Change Name</button>
    
//     </>
//     )
// }
// export default App;
 
//DAY 3 payload 
//it uses  colorSlice

// import { useDispatch, useSelector } from "react-redux"
// import {changeColor} from "./colorSlice"
// import { useState } from "react"
// const App=()=>{
//   const myclr=useSelector(state=>state.mycolor.color)
//   const dispatch=useDispatch()

//   const [val,setval]=useState("");
//   return(
//     <>
//     <h1>My color prog</h1>
//     Enter color :<input type="text" value={val}
//     onChange={(e)=>{setval(e.target.value)}}
//     />
//     <button onClick={()=>{dispatch(changeColor(val))}}>Change</button>
// <hr />
// <div style={{width:"200px",height:"200px",backgroundColor:myclr}}></div>
//     </>
//   )
// }
// export default App;

//Todo 
// import { useDispatch, useSelector } from "react-redux"
// import {addtask} from "./todoslice"
// import { useState } from "react"
// const App=()=>{
//   const work=useSelector(state=>state.todo.task);
//   const dispatch=useDispatch()

//   const [val,setval]=useState("");
//   console.log(work)
//   let sno=0;
//   const ans=work.map((key)=>{
//     sno++;
//     return(
//       <>
//       <tr>
//         <td>{sno}</td>
//         <td>{key.task}</td>
//       </tr>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1>Todo program</h1>
//     Enter work :<input type="text" value={val}
//     onChange={(e)=>{setval(e.target.value)}}
//     />
//     <button onClick={()=>{dispatch(addtask({task:val}))}}>Add</button>
// <hr />
// <table>
//   <tr>
//     <th>#</th>
//     <th></th>

//   </tr>
//   {ans}
// </table>
//     </>
//   )
// }
// export default App;


//DAY 4
//TODO APP
// import { useSelector,useDispatch } from "react-redux";
// import { addTask,removeTask,remByIndex} from "./todosliceapp";
// import { useState } from "react";
// const App=()=>{
//   const[val, setVal]=useState("");
//   // const work=useSelector(state=>state.todo.task);
//    const data=useSelector(state=>state.todo.task);
//   const dispatch=useDispatch();
 
//   console.log(data)
//   let sno=0;
//   const ans=data.map((key,index)=>{
//     sno++;
//     return(
//       <>
//       <tr>
//         <td>{sno}</td>
//         <td>{key.data}</td>
//         <td>
//           <button onClick={()=>{dispatch(removeTask({id:key.id}))}}>Delete</button>
//         </td>
//         <td>
//           <button onClick={()=>{dispatch(remByIndex({id:index}))}}>Del</button>
//         </td>
//       </tr>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1>Welcome to todo App</h1>
//     enter your task <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
//     <button onClick={()=>{dispatch(addTask({id:Date.now(),data:val}))}}>Add</button>
//     <hr />
//     <table>
//       <tr>
//         <th>#</th>
//         <th></th>
//       </tr>
//       {ans}
//     </table>
//     </>
//   )
// }
// export default App;

//day5 
//complete doapp

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  RemoveTask,
  taskComplete,
  taskInComplete,
  myEditSave,
} from "./todoslice";
function App() {
  const [txtVal, setTxtVal] = useState("");
  const [btnStatus, setbtnStatus] = useState(true);
  const [myid, setMyid] = useState("");
  const Data = useSelector((state) => state.todo.task);
  const dispatch = useDispatch();
  console.log(Data);

  const dataEdit = (id, work) => {
    setTxtVal(work);
    setbtnStatus(false);
    setMyid(id);
  };

  const myEditData = () => {
    dispatch(myEditSave({ id: myid, work: txtVal }));
    setbtnStatus(true);
  };

  let sno = 0;
  const ans = Data.map((key) => {
    sno++;
    return (
      <>
        <tr>
          <td> {sno} </td>
          <td>
            {key.taskStatus ? (
              <>
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  {key.work}
                </span>
              </>
            ) : (
              <>{key.work} </>
            )}
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(RemoveTask({ id: key.id }));
              }}
            >
              Del
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(taskComplete({ id: key.id }));
              }}
            >
              Complete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(taskInComplete({ id: key.id }));
              }}
            >
              InComplete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                dataEdit(key.id, key.work);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <h1> ToDo App </h1>
      Enter Your Task{" "}
      <input
        type="text"
        value={txtVal}
        onChange={(e) => {
          setTxtVal(e.target.value);
        }}
      />
      {btnStatus ? (
        <>
          <button
            onClick={() => {
              dispatch(
                addTask({ id: Date.now(), work: txtVal, taskStatus: false })
              );
            }}
          >
            Add
          </button>
        </>
      ) : (
        <>
          <button onClick={myEditData}>Edit Save</button>
        </>
      )}
      <hr />
      <table>
        <tr>
          <th> Sno</th>
          <th> Your Work </th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th></th>
        </tr>
        {ans}
      </table>
    </>
  );
}

export default App;