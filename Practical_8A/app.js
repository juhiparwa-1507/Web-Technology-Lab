"use strict";
let tasks = [];
let nextId = 1;
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const stats = document.getElementById("stats");
function addTask(title) {
    tasks.push({
        id: nextId++,
        title,
        completed: false
    });
    renderTasks();
}
function completeTask(id) {
    tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
    renderTasks();
}
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}
function renderTasks() {
    taskList.replaceChildren();
    stats.textContent =
        `Total: ${tasks.length} | Completed: ${tasks.filter(t => t.completed).length} | Pending: ${tasks.filter(t => !t.completed).length}`;
    if (tasks.length === 0) {
        const empty = document.createElement("p");
        empty.id = "empty";
        empty.textContent = "No tasks yet. Add your first task!";
        taskList.appendChild(empty);
        return;
    }
    tasks.forEach(task => {
        const row = document.createElement("div");
        row.className = task.completed ? "task done" : "task";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", "Mark task complete");
        checkbox.addEventListener("change", () => completeTask(task.id));
        const title = document.createElement("span");
        title.textContent = task.title;
        const remove = document.createElement("button");
        remove.textContent = "Delete";
        remove.className = "delete";
        remove.addEventListener("click", () => deleteTask(task.id));
        row.append(checkbox, title, remove);
        taskList.appendChild(row);
    });
}
form.addEventListener("submit", event => {
    event.preventDefault();
    const title = input.value.trim();
    if (title) {
        addTask(title);
        input.value = "";
        input.focus();
    }
});
renderTasks();
