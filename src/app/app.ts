import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    title = 'Recipes';
    counter = 0

    increment() {
        this.counter++
    }

    decrement() {
        this.counter--
    }
}
