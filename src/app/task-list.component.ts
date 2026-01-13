import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskService} from './task.service';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-task-list',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
        <form>
            <input type="text" [(ngModel)]="newTaskTitle" name="taskTitle" placeholder="Что нужно сделать?">
            <button type="submit">Добавить</button>
        </form>

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
    newTaskTitle: string = '';


    constructor(private readonly taskService: TaskService) {
        this.tasks = this.taskService.getTasks();
    }
}
        