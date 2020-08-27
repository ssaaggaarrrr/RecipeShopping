import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {

  @Input() rec : Recipe;
 // @Output() recipeClicked = new EventEmitter<void>();
  
  constructor(private recipeService : RecipeService ) { }

  ngOnInit(): void {
  }


  onClickRecipe(){
  // this.recipeClicked.emit();
  this.recipeService.recipeClicked.emit(this.rec);
  }

}
