import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;
editRecipeForm: FormGroup;
  constructor(private route: ActivatedRoute , private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      debugger;
    this.editMode = params['id'] != null;
    this.InIt();
    })
  }
private InIt(){
  let recipeName = '';
  let recipeDesc = '';
  let recipeImagePath = '';
  let recipeIngredients = new FormArray([]);
  debugger;
  if(this.editMode){
   const recipe = this.recipeService.getRecipe(this.id);
   recipeName = recipe.name;
   recipeDesc = recipe.description;
   recipeImagePath = recipe.imagePath;
   if(recipe['ingredients']) {
      for(let ingredient of recipe.ingredients){
        recipeIngredients.push(
          new FormGroup({
           'name' : new FormControl(ingredient.name, Validators.required),
           'amount' : new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ])
          })
        )
      }
   } 
  }
  this.editRecipeForm = new FormGroup({
    'name': new FormControl(recipeName, Validators.required),
    'imagePath': new FormControl(recipeImagePath, Validators.required),
    'description' : new FormControl(recipeDesc, Validators.required),
    'ingredients' : recipeIngredients
  })
}

onRecipeSubmit(){
  // console.log(this.editRecipeForm)
  if(this.editMode){
    this.recipeService.updateRecipe(this.id, this.editRecipeForm.value)
  } else {
    this.recipeService.addNewRecipe(this.editRecipeForm.value)
}
}

get editModeIngre() {
  return (<FormArray>this.editRecipeForm.get('ingredients')).controls
}

onNewIngreClick(){
  (<FormArray>this.editRecipeForm.get('ingredients')).controls.push(
    new FormGroup({
    'name': new FormControl('', Validators.required),
    'amount': new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ])
    })
  )
}

}
