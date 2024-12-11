import React, { useState } from "react";
import TaskList from "./TaskList";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const addTask = (taskName) => {
        if (!taskName.trim()) return alert("Task cannot be empty");
        const newTask = { id: Date.now(), name: taskName, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const editTask = (taskId, newName) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, name: newName } : task
        ));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
    }).filter(task => task.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div>
            <h1>To-Do List</h1>
            <SearchBar setSearchQuery={setSearchQuery} />
            <Filter setFilter={setFilter} />
            <TaskList
                tasks={filteredTasks}
                toggleTask={toggleTask}
                editTask={editTask}
                deleteTask={deleteTask}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
