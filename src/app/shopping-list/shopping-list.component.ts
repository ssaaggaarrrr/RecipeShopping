import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import {ShoppingService} from '../shopping-list/shopping.service'
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit{
ingredients: Ingredient[];

constructor(private shoppingService: ShoppingService) {

}

ngOnInit(){
this.ingredients = this.shoppingService.getIngredients();
this.shoppingService.ingredientChanged.subscribe((ingredient : Ingredient[]) =>{
    this.ingredients = ingredient;
})
}

// addedIngredient(ingredient : Ingredient){
// this.ingredients.push(ingredient);
// }


editIngredient(index : number){
this.shoppingService.startedEditing.next(index);
}

}