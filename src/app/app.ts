import {Component, signal} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    title = 'Recipes';
    counter = signal(0)

    increment() {
        this.counter.set(this.counter() + 1);
    }

    decrement() {
        this.counter.set(this.counter() - 1);
    }
}
