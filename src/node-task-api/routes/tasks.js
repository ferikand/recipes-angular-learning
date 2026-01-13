import express from 'express';
import {loadTasks, saveTasks, generateId} from '../utils.js'; // Обратите внимание на путь ../

// 1. Создаем новый роутер
const router = express.Router();

// 2. Определяем маршруты относительно этого роутера

// GET /
router.get('/', (req, res) => {
    const tasks = loadTasks();
    res.json(tasks);
});

// POST /
router.post('/', (req, res) => {
    const {title} = req.body;

    if (!title || title.trim() === '') {
        return res.status(400).send('Title is required');
    }

    const tasks = loadTasks();
    const newTask = {id: generateId(), title: title};
    tasks.push(newTask);
    saveTasks(tasks);

    res.status(201).json(newTask);
});


// 3. Экспортируем роутер
export default router;
