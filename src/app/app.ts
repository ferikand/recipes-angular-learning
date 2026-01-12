import {Component} from '@angular/core';
import {CounterComponent} from './CounterComponent'


@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [CounterComponent]
})
export class App {
    title = 'Recipes'
    tasks = [
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
}
