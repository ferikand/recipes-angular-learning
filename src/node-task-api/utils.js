import fs from 'node:fs'

function generateId() {
    // Ваша функция генерации ID
    return Date.now(); // Используем timestamp для простого уникального ID
}

// --- Функции для работы с задачами ---

function loadTasks() {
    try {
        // 1. Читаем файл СИНХРОННО для простоты. Указываем кодировку 'utf-8'.
        const dataBuffer = fs.readFileSync('tasks.json', 'utf-8');
        // 2. Преобразуем JSON-строку в JavaScript-объект.
        return JSON.parse(dataBuffer);
    } catch (e) {
        // Если файл не найден или пуст, возвращаем пустой массив.
        console.error(e);
        return [];
    }
}

function saveTasks(tasks) {
    // 1. Преобразуем объект в красивую JSON-строку с отступами.
    const dataJSON = JSON.stringify(tasks, null, 2);
    // 2. Записываем строку в файл СИНХРОННО.
    fs.writeFileSync('tasks.json', dataJSON);
}


export {generateId, loadTasks, saveTasks};
