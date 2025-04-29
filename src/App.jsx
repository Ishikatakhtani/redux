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
 import { changeName } from "./nameSlice";
import { useSelector, useDispatch } from "react-redux";
const App=()=>{
  const usrname=useSelector((state)=>state.myname.user);
  const dispatch=useDispatch();
  
  return(
    <>
    <h1>Welcome {usrname} !</h1>
      <button onClick={()=>dispatch(changeName())}>Change Name</button>
    
    </>
    )
}
export default App;
 