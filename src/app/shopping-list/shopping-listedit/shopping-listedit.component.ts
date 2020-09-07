import {Component, OnInit, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-listedit',
    templateUrl: './shopping-listedit.component.html',
    styleUrls: ['./shopping-listedit.component.css']
})

export class ShoppingListEditComponent implements OnInit, OnDestroy {
@ViewChild('nameInput') nameInputRef : ElementRef;
@ViewChild('amountInput') amountInputRef : ElementRef;
@ViewChild('ingredients') ingreForm : NgForm;
subscribeIndexIngre : Subscription;
editedIndex : number
editedIngredient : Ingredient;
editMode = false;
constructor(private shoppingService : ShoppingService) {

}

ngOnInit(){
this.subscribeIndexIngre = this.shoppingService.startedEditing.subscribe((index) => {
    this.editMode = true;
         this.editedIndex = index
      this.editedIngredient = this.shoppingService.getIngredient(this.editedIndex);
      this.ingreForm.setValue({ 
         name : this.editedIngredient.name,
         amount : this.editedIngredient.amount
      })
})
}

ngOnDestroy(){
    this.subscribeIndexIngre.unsubscribe();
}

// onClickAdd(){
// const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
// //this.ingredientAdded.emit(newIngredient);

// this.shoppingService.addedIngredient(newIngredient);

// }
onSubmitIngredients(form : NgForm){
     const value = form.value;
     const newIngredient = new Ingredient(value.name, value.amount);
     if(this.editMode){
        this.shoppingService.updateIngredient( this.editedIndex , newIngredient)  
      
    } else{
        this.shoppingService.addedIngredient(newIngredient);
        
    }
    this.editMode = false;
    form.reset();
    
}

onClear(){
    this.ingreForm.reset();
    this.editMode = false;
}

onDelete(){
this.shoppingService.deleteIngredient(this.editedIndex);
this.editMode = false;
this.onClear()
}


}