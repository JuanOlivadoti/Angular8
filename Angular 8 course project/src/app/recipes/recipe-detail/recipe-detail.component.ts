import { Component, OnInit, Input } from '@angular/core';
// Model
import { Recipe } from '../recipe.model';
// Service
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onToShoppingListClick() {
    this.recipeService.toShoppingList(this.recipe.ingredients)
  }

}
