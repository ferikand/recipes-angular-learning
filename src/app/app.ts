import { Component,signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import {MOCK_RECIPES} from "./mock-recipes";
import {RecipeModel} from "./models";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [RouterOutlet]
})
export class App {

    protected  readonly title =signal('My Recipe Box') ;
    recipe=signal<RecipeModel>(MOCK_RECIPES[0])

    constructor() { }
    onButton1Click(){
        this.recipe.set(MOCK_RECIPES[0])
        console.log(this.recipe())
    }
    onButton2Click(){
        this.recipe.set(MOCK_RECIPES[1])
    }
}
