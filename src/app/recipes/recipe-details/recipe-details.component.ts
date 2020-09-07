import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  // @Input() recipe : Recipe;
  id: number;
  recipe : Recipe;
  constructor(private recipeService: RecipeService , private route : ActivatedRoute , private router: Router)  { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params : Params) => {
       this.id = +params['id'];
       this.recipe = this.recipeService.getRecipe(this.id);
    })
  } 


  onAddToShopL(){
  this.recipeService.addIngredientsToShopL(this.recipe.ingredients);
  }


  onClickEdit(){
  this.router.navigate(['edit'], {relativeTo: this.route })

  }

}
