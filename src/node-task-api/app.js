import express from 'express';
import tasksRouter from './routes/tasks.js'; // 1. Импортируем наш новый роутер

const app = express();
const port = 3000;

app.use(express.json());

// 2. "Монтируем" роутер.
// Говорим: "Все запросы, которые начинаются с /api/tasks, отправляй на обработку в tasksRouter"
app.use('/api/tasks', tasksRouter);

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});