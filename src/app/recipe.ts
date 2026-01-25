import { Injectable } from '@angular/core';
import {MOCK_RECIPES} from "./mock-recipes";
import {RecipeModel} from "./models";

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  constructor() {
  }

  getRecipes():RecipeModel[]{
    return MOCK_RECIPES
  }

  addRecipe(newRecipe: Partial<RecipeModel>){
    const id = Date.now()

    const recipe: RecipeModel = {
      id: id,
      name: newRecipe.name || 'New Recipe',
      description: newRecipe.description || '',
      imgUrl: newRecipe.imgUrl || '',
      isFavorite: false,
      ingredients: []
    }

    MOCK_RECIPES.push(recipe)
  }
}
