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
}
