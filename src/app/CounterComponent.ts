import {computed, signal, Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-counter',
    standalone: true,
    imports: [CommonModule],
    template: `<p>{{ counter() }}</p>
    <p>{{ isEven() ? 'Even' : 'Odd' }}</p>
    <button (click)="increment()">Press me +</button>
    <button [disabled]="counter() <= 0" (click)="decrement()">Press me -</button>`,
    styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    // 1. Сигнал создается с начальным значением 0
    counter = signal(0);
    isEven = computed(() => this.counter() % 2 === 0);

    // 2. Создаем сеттер с декоратором @Input()
    @Input()
    set startValue(value: number) {
        // 3. Когда родитель передает значение, этот метод вызывается,
        //    и мы устанавливаем новое значение для нашего сигнала.
        this.counter.set(value);
    }

    increment() {
        this.counter.update(prev => prev + 1);
    }

    decrement() {
        this.counter.update(prev => prev - 1);
    }
}
