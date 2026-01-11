import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // Мы переместим сюда наши тестовые данные
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper'],
      instructions: 'Cook spaghetti. Fry pancetta. Mix eggs and cheese. Combine everything.'
    },
    {
      id: 2,
      name: 'Classic Omelette',
      ingredients: ['Eggs', 'Milk', 'Salt', 'Butter'],
      instructions: 'Whisk eggs, milk, and salt. Pour into a hot, buttered pan. Cook until set.'
    }
  ];

  constructor() { }

  // Метод для получения всех рецептов
  getRecipes(): Recipe[] {
    return this.recipes;
  }

  // Метод для получения одного рецепта по id
  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(r => r.id === id);
  }
}
