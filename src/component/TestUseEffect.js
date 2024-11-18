import React, { useState, useEffect } from 'react';
import '../styles/TestUseEffect.css';

// Zadanie nr 2
function TestUseEffect() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <h1>Lista Zadań</h1>
            <div className="todo-input-container">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Dodaj nowe zadanie"
                    className="todo-input"
                />
                <button onClick={handleAddTask} className="todo-button">Dodaj Zadanie</button>
            </div>

            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <li key={index} className="todo-item">
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                        <button
                            onClick={() => toggleTaskCompletion(index)}
                            className="todo-toggle-btn"
                        >
                            {task.completed ? 'Oznacz jako niewykonane' : 'Oznacz jako wykonane'}
                        </button>
                        <button
                            onClick={() => handleDeleteTask(index)}
                            className="todo-delete-btn"
                        >
                            Usuń
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TestUseEffect;
