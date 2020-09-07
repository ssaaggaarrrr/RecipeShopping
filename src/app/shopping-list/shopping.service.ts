import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ShoppingService {
  ingredientChanged = new EventEmitter<Ingredient[]>()
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 4),
    new Ingredient('Apples', 10),
];


  constructor() { }

  
getIngredients(){
  return this.ingredients.slice();
}

getIngredient(index : number){
 return this.ingredients[index];
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

updateIngredient(index: number, ingredient: Ingredient){
  this.ingredients[index] = ingredient;
  this.ingredientChanged.emit(this.ingredients.slice());
}


deleteIngredient(index: number){
  this.ingredients.splice(index, 1);
  this.ingredientChanged.emit(this.ingredients.slice());
}

}
