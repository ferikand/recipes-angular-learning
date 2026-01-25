import { Component, computed, signal, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RecipeModel } from "../models";
import { Recipe } from '../recipe';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [ FormsModule, RouterLink],
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


  constructor() { }


}
