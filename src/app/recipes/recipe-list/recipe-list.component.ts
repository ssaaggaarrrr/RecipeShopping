import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   // @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] 
  constructor(private recipeService : RecipeService , private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.recipeChanged.subscribe((recipe : Recipe[]) =>{
      this.recipes = recipe;
    }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe : Recipe){
  // this.recipeWasSelected.emit(recipe);
  // }

  // onClickRemove(id: number){
  // this.recipes.splice(id, 1);
  // console.log(this.recipes);
  // }

  toCreate(){
    this.router.navigate( ['new'], {relativeTo : this.route})
  }

}
