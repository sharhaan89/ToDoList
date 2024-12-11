import React, { useState } from "react";

function TaskList({ tasks, toggleTask, editTask, deleteTask, addTask }) {
    const [newTask, setNewTask] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={() => {
                addTask(newTask);
                setNewTask("");
            }}>Add Task</button>

            {tasks.map(task => (
                <div key={task.id} style={{ marginBottom: "10px" }}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                    />
                    {task.completed ? (
                        <strike>{task.name}</strike>
                    ) : (
                        <span>{task.name}</span>
                    )}
                    <button onClick={() => {
                        const newName = prompt("Edit Task", task.name);
                        if (newName) editTask(task.id, newName);
                    }}>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
