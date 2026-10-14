import type { Task } from "./types";

let tasks: Task[] = [];
let nextId = 1;

export function addTask(title: string): Task {
  const task: Task = {
    id: nextId++,
    title,
    completed: false,
  };

  tasks.push(task);
  return task;
}

export function completeTask(id: number): void {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: true } : task
  );
}

export function deleteTask(id: number): void {
  tasks = tasks.filter((task) => task.id !== id);
}

export function getTasks(): Task[] {
  return tasks;
}