import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Chicken Recipe' , 'Delicious Chicken Recipe' , 'https://cdn.pixabay.com/photo/2018/06/01/20/25/chicken-3447080_960_720.jpg'),
    new Recipe('Pasta Zucchini' , 'Just another recipe' , 'https://cdn.pixabay.com/photo/2020/01/28/13/18/noodles-4799804_960_720.jpg'),
    new Recipe('Another Recipe' , 'Just another recipe' , 'https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4BqodXSHHE-j78vyZ0iwRUmY_nuzprQ_mxVCWqrJBTJk3A.jpeg'),

  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe : Recipe){
  this.recipeWasSelected.emit(recipe);
  }

  // onClickRemove(id: number){
  // this.recipes.splice(id, 1);
  // console.log(this.recipes);
  // }

}
