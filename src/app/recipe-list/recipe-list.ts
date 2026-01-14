import { Component, computed, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {MOCK_RECIPES} from "../mock-recipes";
import {RecipeModel} from "../models";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {

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
