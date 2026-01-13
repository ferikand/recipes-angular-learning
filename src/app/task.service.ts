import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})
export class TaskService {
    private readonly tasks = [
        {
            id: 1,
            title: 'learn angular',
        },
        {
            id: 2,
            title: 'learn node',
        },
        {
            id: 3,
            title: 'learn react',
        },
        {
            id: 4,
            title: 'learn java',
        },
    ]

    public getTasks() {
        return this.tasks
    }

    public addTask(title: string) {
        const maxId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) : 0;
        const newId = maxId + 1;

        const newTask = {
            id: newId,
            title,
        }
        this.tasks.push(newTask)
    }

}