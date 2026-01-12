import { Component } from '@angular/core';
import { CounterComponent } from './CounterComponent';
import { RouterOutlet, RouterLink } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [CounterComponent, RouterOutlet, RouterLink]
})
export class App {
    title = 'Recipes';

    constructor() { }
}
