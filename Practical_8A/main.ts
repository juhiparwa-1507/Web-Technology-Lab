import {
  addTask,
  completeTask,
  deleteTask,
  getTasks,
} from "./todoLogic";

console.log("Adding tasks...");

const task1 = addTask("Complete Practical 8");
addTask("Study TypeScript");

console.log("All tasks:", getTasks());

completeTask(task1.id);
console.log("After completing task:", getTasks());

deleteTask(task1.id);
console.log("After deleting task:", getTasks());