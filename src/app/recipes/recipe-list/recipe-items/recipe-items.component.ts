import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {

  @Input() rec : Recipe;
  @Output() recipeClicked = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }


  onClickRecipe(){
  this.recipeClicked.emit();
  }

}
