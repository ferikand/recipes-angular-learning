import {computed, signal, Component} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-counter',
    standalone: true,
    imports: [CommonModule],
    template: `<p>{{ counter() }}</p>
    <p>{{ isEven() ? 'Even' : 'Odd' }}</p>
    <button (click)="increment()">Press me +</button>
    <button [disabled]="counter() <= 0" (click)="decrement()">Press me -</button>`
})

export class CounterComponent {
    counter = signal(0);
    isEven = computed(() => this.counter() % 2 === 0);

    increment() {
        this.counter.update(prev => prev + 1);
    }

    decrement() {
        this.counter.update(prev => prev - 1);
    }
}
