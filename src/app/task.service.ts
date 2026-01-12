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

}