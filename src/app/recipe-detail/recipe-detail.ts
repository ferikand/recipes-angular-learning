import {Component, computed, input, signal,inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from "../recipe";
import {RecipeModel} from "../models";


@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [  ],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail implements OnInit {
  servings= signal(1)
  protected recipe = signal<RecipeModel | undefined>(undefined)
  adjustedIngredients= computed(()=>{
    const currentRecipe = this.recipe()
    if (!currentRecipe) {
      return []
    }
    return currentRecipe.ingredients.map(ingredient=>{
      return {
        ...ingredient,
        quantity: ingredient.quantity * this.servings()
      }
    })
  })
  private route = inject(ActivatedRoute)
  private recipeService = inject(Recipe)

  constructor() {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id = Number(params.get('id'))
      const foundRecipe = this.recipeService.getRecipes().find(recipe=>recipe.id===id)
      this.recipe.set(foundRecipe)
    })

  }

  increase(){
    this.servings.update(servings=>servings + 1)
  }

  decrease(){
    this.servings.update(servings => servings > 1 ? servings - 1 : servings)
  }

}
