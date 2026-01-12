import {Component} from '@angular/core';
import {CounterComponent} from './CounterComponent';
import {TaskService} from "./task.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [CounterComponent]
})
export class App {
    title = 'Recipes';
    // Объявляем свойство tasks
    tasks: { id: number, title: string }[];

    // Внедряем сервис в конструкторе
    constructor(private readonly taskService: TaskService) {
        // Инициализируем свойство tasks данными из сервиса
        this.tasks = this.taskService.getTasks();
    }
}
