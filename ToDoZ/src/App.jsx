import React from 'react'
import { useState } from 'react';
import { FaLevelUpAlt } from "react-icons/fa";
import { FaLevelDownAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";




function App() {
  document.title = " To Do List";


 const todoData = [ 
  { 
    id:1,
    title: "Eat Breakfat",
    description: "this is the description i want to add to this section ",
    completed: false,
    isEditing: false,
  }, 
  { 
    id:2,
    title: "wWlk 10k",
    description: "this is the description i want to add to this section ",
    completed: false,
    isEditing: false,
  }, 
  { 
    id:3,
    title: "Study React",
    description: "this is the description i want to add to this section ",
    completed: false,
    isEditing: false,
  }, 
 
];


  const [tasks, setTasks] = useState(todoData);
  const [newTasks, setNewTasks] = useState("");


  function handleNewTask(event){
    setNewTasks(event.target.value)

  };
  function addTask(){
    if (newTasks.trim() !== "") {
      const newTask = {
        id: tasks.length +1,
        title: newTasks,
        completed: false,
      };
      setTasks((t) => [...t, newTask]);
      setNewTasks(""); 
  }};

  function deleteTask (id){
    setTasks(tasks.filter((_,i) => i !== id))
  };

  function MoveTaskUp(index){
      if(index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks)
      }
  };

  function MoveTaskdown(index){
    if(index < tasks.length -1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks)
      }
    
  };

    function handleChecked(id){
      const newTasks = tasks.map((task) =>{
      return id === task.id ? {...task, completed:!task.completed} : task;
     });
     setTasks(newTasks)
    };

  //edit function
  


  







    
  return (
    <div>
    <h1>To Do List</h1>
    <input onChange={handleNewTask} value={newTasks} placeholder="Entre Task Here..." /> 
    <button onClick={addTask} > Add Task </button> <br/>

    <ol> {tasks.map((task, index) =>
    <li key={task.id}>
    <input type="checkbox" onChange={() => handleChecked(task.id)} checked={task.completed} />
    <select name="Person" id="Person" >
          <option value="">Task Preformed By</option>
          <option value="saab">Yumi</option>
          <option value="mercedes">Doctor</option>
          <option value="audi">Abel</option>
      </select>
    <input type="date" ></input>



    <h2 style={{textDecoration: task.completed ? "line-through" : "none",}} > 
    
    {task.isEditing ? 
    (<>
    <input 
      type="text"
      value={task.title}/>
     </> ) : 
    (<div>{task.title}</div>)} 
      
    </h2>
    
    <button onClick={() => MoveTaskUp(index)} > <FaLevelUpAlt/> </button>
    <button onClick={() =>MoveTaskdown(index)} > <FaLevelDownAlt/> </button>
    <button onClick={() => deleteTask(index)} > <MdDelete /> </button>
    <button onClick={() =>toggleEditMode(task.id)}> {task.isEditing ? "save" : <MdEdit />} </button>

    </li>)}
    </ol>

    </div>
  )
}

export default App
