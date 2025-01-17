import React from 'react'
import { useState } from 'react';

function App() {
  document.title = " To Do List";


  const [tasks, setTasks] = useState(["Eat Breakfat", "Walk 10k steps", "watch a movie and then fall asleep"]);
  const [newTasks, setNewTasks] = useState("");


  function handleNewTask(event){
    setNewTasks(event.target.value)

  };
  function addTask(){
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks(""); 
  }

  };
  function deleteTask (){

  };
  function MoveTaskUp (){

  };
  function MoveTaskdown (){
    
  };








  return (
    <div>
    <h1>To Do List</h1>
    <input onChange={handleNewTask} placeholder="Entre Task Here..." /> 
    <button onClick={addTask} > Add Task </button> <br/>

    <ol> {tasks.map((task, index) =>
    <li key={index}>
    <input type="checkbox" ></input> 
    <select name="Person" id="Person" >
          <option value="">Task Preformed By</option>
          <option value="saab">Yumi</option>
          <option value="mercedes">Doctor</option>
          <option value="audi">Abel</option>
      </select>
    <input type="date" ></input>
    {task} 
    <button> Up </button>
    <button> Down </button>
    <button> Delete </button>
    <button> Edit </button>

    </li>)}
    </ol>

     
      


      






    </div>
  )
}

export default App
