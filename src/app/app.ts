import { Component,  signal } from '@angular/core';
import {RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [RouterOutlet, RouterLink, ]
})
export class App {
    protected  readonly title = signal('My Recipe Box') ;

    constructor() { }

}
