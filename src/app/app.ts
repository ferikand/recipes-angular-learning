import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { JsonPipe } from '@angular/common';
import {MOCK_RECIPES} from "./mock-recipes";
import {RecipeModel} from "./models";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [RouterOutlet, JsonPipe]
})
export class App {
    protected  readonly title =signal('My Recipe Box') ;
    protected recipe=signal<RecipeModel>(MOCK_RECIPES[0])
    servings=signal(1)

    adjustedIngredients=computed(()=>{
        return this.recipe().ingredients.map(ingredient=>{
            return {
                ...ingredient,
                quantity:ingredient.quantity*this.servings()
            }
        })
    })

    constructor() { }
    onButton1Click(){
        this.recipe.set(MOCK_RECIPES[0])
        console.log(this.recipe())
    }
    onButton2Click(){
        this.recipe.set(MOCK_RECIPES[1])
    }
    increase(){
        this.servings.update(servings=>servings+1)

        }

    decrease(){
        this.servings.update(servings=>{
            if (servings>1){
                return  servings-1
            } else {
                return servings
            }
        })
    }

}
