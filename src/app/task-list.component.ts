import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskService} from './task.service';

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [CommonModule],
    template: `
        <h3>Список Задач</h3>
        @if (tasks.length > 0) {
            <ul>
                @for (task of tasks; track task.id) {
                    <li>{{ task.title }}</li>
                }
            </ul>
        } @else {
            <p>Список задач пуст!</p>
        }
    `
})
export class TaskListComponent {
    tasks: { id: number, title: string }[];

    constructor(private readonly taskService: TaskService) {
        this.tasks = this.taskService.getTasks();
    }
}
        