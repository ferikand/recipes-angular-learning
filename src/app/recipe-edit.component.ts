import {Component, Input, OnInit} from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <div>
      <h2>{{ editMode ? 'Edit Recipe' : 'Create New Recipe' }}</h2>
      <form [formGroup]="recipeForm">
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            formControlName="name">
        </div>

        <div>
          <label for="instructions">Instructions</label>
          <textarea
            id="instructions"
            formControlName="instructions"
            rows="6"></textarea>
        </div>

        <div formArrayName="ingredients">
          <h4>Ingredients</h4>
          @for (ingredientCtrl of ingredients.controls; track $index) {
            <div>
              <input
                type="text"
                [formControlName]="$index">
              <button (click)="onDeleteIngredient($index)" type="button">X</button>
            </div>
          }
        </div>

        <button (click)="onAddIngredient()" type="button">Add Ingredient</button>
        <hr>
        <button type="submit">Save Recipe</button>
      </form>
    </div>
  `
})
export class RecipeEditComponent implements OnInit {
  recipeForm!: FormGroup;
  editMode = false;
  private currentId!: number;

  constructor(private recipeService: RecipeService) {
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  @Input()
  set id(recipeId: string) {
    if (recipeId) {
      this.currentId = +recipeId;
      this.editMode = true;
    }
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let recipeName = '';
    let recipeIngredients = new FormArray<FormControl>([]);
    let recipeInstructions = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.currentId);
      if (recipe) {
        recipeName = recipe.name;
        recipeInstructions = recipe.instructions;
        if (recipe.ingredients) {
          for (let ingredient of recipe.ingredients) {
            recipeIngredients.push(new FormControl(ingredient, Validators.required));
          }
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'ingredients': recipeIngredients,
      'instructions': new FormControl(recipeInstructions, Validators.required)
    });
  }

  onAddIngredient() {
    this.ingredients.push(
      new FormControl('', Validators.required)
    );
  }

  onDeleteIngredient(index: number) {
    this.ingredients.removeAt(index);
  }
}
