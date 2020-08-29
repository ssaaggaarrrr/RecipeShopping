import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
@Injectable({
  providedIn: 'root'
})

export class ShoppingService {
  ingredientChanged = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 4),
    new Ingredient('Apples', 10),
];


  constructor() { }

  
getIngredients(){
  return this.ingredients.slice();
}

addedIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientChanged.emit(this.ingredients.slice());
}

addIngredients(ingredient : Ingredient[]){
  this.ingredients.push(...ingredient);
  this.ingredientChanged.emit(this.ingredients.slice());
  // for(let ing of ingredient){
  //   this.addedIngredient(ing);
  // }

}


}
