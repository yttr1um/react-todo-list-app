import { useState } from "react"

const ToDoList = () => {

    const [tasks, setTasks] = useState([1, 2, 3])
    const [newTask, setNewTask] = useState("")
    
    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => t.concat(newTask))
            setNewTask("")
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        const updatedTasks = [...tasks]
        if (index > 0) {
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index) {
        const updatedTasks = [...tasks]
        if (index < tasks.length - 1) {
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]]
            
            setTasks(updatedTasks)
        }
    }

    return (
        <div className="todo-list">
            <h1>Todo List</h1>

            <div className="todo-input">
                <input
                    type="text"
                    placeholder="Enter task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className="add-btn"
                    onClick={addTask}
                >
                    Add
                </button>
            </div>

            <ul>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>

                        <div className="todo-controls">
                            
                            <button
                                className="delete-btn"
                                onClick={() => deleteTask(index)}
                            >delete
                            </button>

                            <button
                                className="move-btn"
                                onClick={() => moveTaskUp(index)}
                            >UP
                            </button>

                            <button
                                className="move-btn"
                                onClick={() => moveTaskDown(index)}
                            >DOWN
                            </button>
                        </div>
                    </li>)}
            </ul>
        </div>
    )
}

export default ToDoList