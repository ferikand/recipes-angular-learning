import { Component, signal } from '@angular/core';
import {RecipeModel} from "../models";
import {RecipeDetail} from "../recipe-detail/recipe-detail";
import {MOCK_RECIPES} from "../mock-recipes";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {

  protected recipe=signal<RecipeModel>(MOCK_RECIPES[0])

  constructor() { }

  onButton1Click(){
    this.recipe.set(MOCK_RECIPES[0])
    console.log(this.recipe())
  }
  onButton2Click(){
    this.recipe.set(MOCK_RECIPES[1])
  }
}
