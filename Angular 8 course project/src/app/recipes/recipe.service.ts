import { EventEmitter, Injectable } from "@angular/core";
// Model
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
// Service
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel',
            'Super Awesome Schnitzel',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Meat', 5),
                new Ingredient('Cheese', 3),
                new Ingredient('Bread', 1)
            ]),
        new Recipe(
            'Pizza',
            'yummy',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Basilic', 2),
                new Ingredient('Cheese', 5),
                new Ingredient('Flour', 100)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice(); //Get a copy with slice. this.recipe; gets the reference.
    }

    toShoppingList(ingredients: Ingredient[]) {
        console.log(ingredients);
        this.slService.addIngredients(ingredients);

    }
}