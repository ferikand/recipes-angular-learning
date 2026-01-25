import { Component, computed, signal, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RecipeModel } from "../models";
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeDetail, FormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  searchTerm = signal('');
  private recipeService = inject(Recipe);

  filteredRecipes = computed(() => {
    return this.recipeService.getRecipes().filter((recipe) =>
        recipe.name.toLowerCase().includes(this.searchTerm().toLowerCase())
    );
  });

  protected recipe = signal<RecipeModel>(this.recipeService.getRecipes()[0]);

  constructor() { }

  onButtonClick(selectedRecipe: RecipeModel) {
    this.recipe.set(selectedRecipe);
  }
}