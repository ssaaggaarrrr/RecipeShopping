import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

 private recipes: Recipe[] = [
    new Recipe('Chicken Recipe' , 'Delicious Chicken Recipe' ,
     'https://cdn.pixabay.com/photo/2018/06/01/20/25/chicken-3447080_960_720.jpg',
     [new Ingredient('Chicken', 1), new Ingredient('Masala', 2), new Ingredient('Oil',1 )]),
    new Recipe('Pasta Zucchini' , 'Just another recipe' , 'https://cdn.pixabay.com/photo/2020/01/28/13/18/noodles-4799804_960_720.jpg',
    [new Ingredient('Pasta', 2), new Ingredient('Milk', 1), new Ingredient('Sause',1 )]),
    new Recipe('Another Recipe' , 'Just another recipe' , 
    'https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4BqodXSHHE-j78vyZ0iwRUmY_nuzprQ_mxVCWqrJBTJk3A.jpeg'
    ,[new Ingredient('Something', 1), new Ingredient('Another Ingredient', 2), new Ingredient('Masala',1 )]),
  ];
  
  recipeClicked = new EventEmitter<Recipe>();
  constructor(private shoppingService : ShoppingService) { }

getRecipes(){
  return this.recipes.slice();
}


addIngredientsToShopL(ingredient : Ingredient[]){
this.shoppingService.addIngredients(ingredient);
}


getRecipe(index: any){
   return this.recipes[index];
}





}
