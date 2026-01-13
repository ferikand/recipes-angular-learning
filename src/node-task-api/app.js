const {generateId, loadTasks, saveTasks} = require('./utils');

/** @type {Array<{id: number, title: string}>} */ // <--- ДОБАВЬТЕ ЭТУ СТРОКУ
const tasks = loadTasks();

// Теперь IDE знает, что 'tasks' - это массив, и ошибка должна исчезнуть.

console.log('Задачи до добавления:', tasks);

const newTask = {id: generateId(), title: 'Починить баг'};
tasks.push(newTask);

console.log('Добавили новую задачу. Сохраняем...');
saveTasks(tasks);

console.log('Готово! Файл tasks.json обновлен.');