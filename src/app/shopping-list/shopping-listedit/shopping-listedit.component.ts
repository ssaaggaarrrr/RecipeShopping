import {Component, OnInit, EventEmitter, ElementRef, ViewChild, Output} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
    selector: 'app-shopping-listedit',
    templateUrl: './shopping-listedit.component.html',
    styleUrls: ['./shopping-listedit.component.css']
})

export class ShoppingListEditComponent implements OnInit{
@ViewChild('nameInput') nameInputRef : ElementRef;
@ViewChild('amountInput') amountInputRef : ElementRef;
constructor(private shoppingService : ShoppingService) {

}

ngOnInit(){

}

onClickAdd(){
const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
//this.ingredientAdded.emit(newIngredient);
this.shoppingService.addedIngredient(newIngredient);

}



}