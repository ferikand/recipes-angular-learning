import {Component} from '@angular/core';
import {Recipe} from './recipe.model';
import {RouterModule} from '@angular/router';
import {RecipeService} from './recipe.service'

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h3>My Recipes</h3>
    <ul>
      @for (recipe of recipes; track recipe.id) {
        <li><a [routerLink]="['/recipe', recipe.id]">{{ recipe.name }}</a></li>
      }
    </ul>
  `,
})
export class RecipeListComponent {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    this.recipes = recipeService.getRecipes();
  }
}
