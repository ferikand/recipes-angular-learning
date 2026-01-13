import chalk from "chalk";
import {generateId, loadTasks, saveTasks} from './utils.js'

/** @type {Array<{id: number, title: string}>} */ // <--- ДОБАВЬТЕ ЭТУ СТРОКУ
const tasks = loadTasks();

// Теперь IDE знает, что 'tasks' - это массив, и ошибка должна исчезнуть.

console.log(chalk.green('Задачи до добавления: '), ...tasks);

const newTask = {id: generateId(), title: 'Починить баг'};
tasks.push(newTask);

console.log(chalk.yellow('Добавили новую задачу. Сохраняем...'));
saveTasks(tasks);

console.log(chalk.blue.bold('Готово! Файл tasks.json обновлен.'));
console.log(chalk.green('Задачи после добавления: '), ...tasks);