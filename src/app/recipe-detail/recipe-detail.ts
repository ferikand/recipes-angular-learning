import {Component, computed, input, signal} from '@angular/core';
import {RecipeModel} from "../models";


@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [  ],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
readonly recipe = input.required<RecipeModel>()
  servings=signal(1)
  adjustedIngredients=computed(()=>{
    return this.recipe().ingredients.map(ingredient=>{
      return {
        ...ingredient,
        quantity:ingredient.quantity*this.servings()
      }
    })
  })

  constructor() {  }

  increase(){
    this.servings.update(servings=>servings + 1)
  }

  decrease(){
    this.servings.update(servings=> {
      if (servings>1) {
        return  servings-1
      } else {
        return servings
      }
    })
  }

}
