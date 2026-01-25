import {Component, computed, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RecipeModel} from "../models";
import {RecipeDetail} from "../recipe-detail/recipe-detail";
import {MOCK_RECIPES} from "../mock-recipes";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeDetail, FormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  searchTerm=signal('')
  filteredRecipes=computed(()=>{
    return MOCK_RECIPES.filter(recipe=>recipe.name.toLowerCase().includes(this.searchTerm().toLowerCase()))})
  protected recipe=signal<RecipeModel>(MOCK_RECIPES[0])

  constructor() { }

  onButtonClick(selectedRecipe: RecipeModel){
    this.recipe.set(selectedRecipe)
  }
}
