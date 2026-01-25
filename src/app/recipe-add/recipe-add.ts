import { Component,inject } from '@angular/core';
import {ReactiveFormsModule,FormBuilder,  Validators} from '@angular/forms';
import {Recipe} from "../recipe";
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-add.html',
  styleUrl: './recipe-add.css',
})
export class RecipeAdd {
  private fb = inject(FormBuilder)
  recipeForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    imgUrl: [''],
  })
  private recipeService = inject(Recipe)
  private router = inject(Router)

  constructor() { }

  onSubmit(){
    if (this.recipeForm.valid){
      const formValue = this.recipeForm.value;
      const newRecipeData = {
        name: formValue.name || 'Untitled',
        description: formValue.description || '',
        imgUrl: formValue.imgUrl || ''
      };
      console.log('Saved:', newRecipeData)
      this.recipeService.addRecipe(newRecipeData)
      this.router.navigate(['/'])
    }
  }
}
