import React, { useState } from 'react';
import { FaLevelUpAlt } from "react-icons/fa";
import { FaLevelDownAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function App2() {
  document.title = "To Do List";

  const todoData = [
    {
      id: 1,
      title: "Eat Breakfast",
      completed: false,
      isEditing: false, // Track whether this task is being edited
    },
    {
      id: 2,
      title: "Walk 10k",
      completed: false,
      isEditing: false,
    },
    {
      id: 3,
      title: "Study React",
      completed: false,
      isEditing: false,
    },
  ];

  const [tasks, setTasks] = useState(todoData);
  const [newTasks, setNewTasks] = useState("");

  function handleNewTask(event) {
    setNewTasks(event.target.value);
  }

  function addTask() {
    if (newTasks.trim() !== "") {
      const newTask = {
        id: tasks.length + 1,
        title: newTasks,
        completed: false,
        isEditing: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTasks("");
    }
  }

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function MoveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function MoveTaskdown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function toggleEditMode(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  }

  function saveTaskText(id, newText) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: newText, isEditing: false } : task
      )
    );
  }

  return (
    <div>
      <h1>To Do List</h1>
      <input onChange={handleNewTask} value={newTasks} placeholder="Enter Task Here..." />
      <button onClick={addTask}>Add Task</button>
      <br />
      <ol>
        {tasks.map((task, index) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} />
            {task.isEditing ? (
              <input
                type="text"
                defaultValue={task.title}
                onBlur={(e) => saveTaskText(task.id, e.target.value)} // Save when focus is lost
                autoFocus
              />
            ) : (
              <span>{task.title}</span>
            )}
            <button onClick={() => MoveTaskUp(index)}><FaLevelUpAlt /></button>
            <button onClick={() => MoveTaskdown(index)}><FaLevelDownAlt /></button>
            <button onClick={() => deleteTask(index)}><MdDelete /></button>
            <button onClick={() => toggleEditMode(task.id)}>
              {task.isEditing ? "Cancel" : <MdEdit />}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App2;
