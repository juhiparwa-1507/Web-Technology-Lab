import { useState } from "react";
import type { Task } from "./types";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextId, setNextId] = useState(1);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: nextId,
      title,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
    setNextId((id) => id + 1);
  };

  const toggleTask = (id: number) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;
  const progress =
    tasks.length === 0 ? 0 : (completedCount / tasks.length) * 100;

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>My To-Do List</h1>
        <p>Web Technology Lab — Practical 8B</p>
      </header>

      <section className="todo-card">
        <TaskInput onAddTask={addTask} />

        <div className="task-summary">
          <div>
            <strong>{tasks.length}</strong>
            <span>Total</span>
          </div>
          <div>
            <strong>{completedCount}</strong>
            <span>Completed</span>
          </div>
          <div>
            <strong>{pendingCount}</strong>
            <span>Pending</span>
          </div>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-label="Task completion progress"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2>My Tasks</h2>

        {tasks.length === 0 ? (
          <p className="empty-message">
            No tasks yet. Add your first task!
          </p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
          </ul>
        )}
      </section>

      <footer>
        Built with React and TypeScript
      </footer>
    </main>
  );
}

export default App;