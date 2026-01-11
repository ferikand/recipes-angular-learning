import {Component, Input} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  template: `
    @if (recipe) {
      <div>
        <h2>{{ recipe.name }}</h2>

        <h4>Ingredients</h4>
        <ul>
          @for (ingredient of recipe.ingredients; track $index) {
            <li>{{ ingredient }}</li>
          }
        </ul>

        <h4>Instructions</h4>
        <p>{{ recipe.instructions }}</p>
      </div>
    } @else {
      <p>Recipe not found!</p>
    }
  `,
})
export class RecipeDetailComponent {
  recipe: Recipe | undefined;

  constructor(private recipeService: RecipeService) {
  }

  @Input()
  set id(recipeId: string) {
    this.recipe = this.recipeService.getRecipeById(+recipeId);
  }
}
