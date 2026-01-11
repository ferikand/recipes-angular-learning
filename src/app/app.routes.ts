import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail.component';
import {RecipeEditComponent} from './recipe-edit.component'

export const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'new-recipe', component: RecipeEditComponent },
  { path: 'edit-recipe/:id', component: RecipeEditComponent },
];
