"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
exports.completeTask = completeTask;
exports.deleteTask = deleteTask;
exports.getTasks = getTasks;
let tasks = [];
let nextId = 1;
function addTask(title) {
    const task = {
        id: nextId++,
        title,
        completed: false,
    };
    tasks.push(task);
    return task;
}
function completeTask(id) {
    tasks = tasks.map((task) => task.id === id ? { ...task, completed: true } : task);
}
function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
}
function getTasks() {
    return tasks;
}
