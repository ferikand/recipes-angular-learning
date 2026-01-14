import { Component,  signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import {RecipeList} from "./recipe-list/recipe-list";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [RouterOutlet, RecipeList]
})
export class App {
    protected  readonly title =signal('My Recipe Box') ;

    constructor() { }

}
