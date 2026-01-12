import {Component, signal, computed} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    title = 'Recipes';
    counter = signal(0)
    isEven = computed(() => this.counter() % 2 === 0)


    increment() {
        this.counter.update(prev => prev + 1);
    }

    decrement() {
        this.counter.update(prev => prev - 1)
    }
}
