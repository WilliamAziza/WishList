import React, { useState } from "react";


function WishList() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.slice();
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1>My Birthday Wish List</h1>
      <input
        type="text"
        id="taskInput"
        placeholder="Add a new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul id="taskList">
        {tasks.map((task, index) => (
          <li className="todo-item" key={index}>
            <input type="checkbox" />
            <span>{task}</span>
            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishList;
