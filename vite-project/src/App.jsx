import { useState } from 'react'
import Button from './Button.jsx'
import './App.css'
function App() {
//   const [taskList, setTaskList] = useState([])
//   const [task,setTask] = useState("")
//   const handleChange =(event)=>{
//     setTask(event.target.value)
//   }
//   const handleAdd = () =>{
//     if(task.length!==0){
//       setTaskList([...taskList,task])
//       setTask("")
//     }
//   }
//   const handleDelete = (index) => {
//     const output = taskList.filter((item, key) => key !== index);
//     setTaskList(output);
// };
const [count,setcount] = useState(0)
  return (
    // <>
    //   {/* <h1>Todo App</h1>
    //   <input type="text" value={task} onChange={handleChange}/>
    //   <button onClick={handleAdd}>Add</button>
    //   <ol>
    //     {taskList.map((item,index)=>{
    //       return(
    //       <li key={index}><span>{item}</span>
    //       <button onClick={()=>handleDelete(index)}>delete</button></li>)
    //     })}
    //   </ol> */}
    //   <Button click={count} clickF={setcount}/>
    //   <Button click={count} clickF={setcount}/>
    // </>
    <>
    <Board/>
    </>
  )
}
function Board(){
  return<>
  <div>
    <Square value={1}/>
    <Square value={2}/>
    <Square value={3}/>
  </div>
  <div>
    <Square value={4}/>
    <Square value={5}/>
    <Square value={6}/>
  </div>
  <div>
    <Square value={7}/>
    <Square value={8}/>
    <Square value={9}/>
  </div>
  </>
}
function Square(props){
  return <button>{props.value}</button>
}
export default App
