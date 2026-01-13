import express from 'express';
import {loadTasks} from "./utils.js";

// 1. Создаем экземпляр приложения
const app = express();
const port = 3000; // Порт, на котором будет работать сервер

// 2. Создаем правило (маршрут) для главного URL ('/')
// Когда кто-то зайдет на http://localhost:3000/, выполнится эта функция
app.get('/', (req, res) => {
    // req - объект запроса (что пришло от клиента)
    // res - объект ответа (что мы отправим клиенту)
    res.send('Привет, мир! Мой первый сервер работает.');
});

app.get('/tasks', (req, res) => {
    const tasks = loadTasks()
    res.json(tasks);
})

// 3. Запускаем сервер, чтобы он начал слушать указанный порт
app.listen(port, () => {
    console.log(`Сервер успешно запущен на http://localhost:${port}`);
});
    