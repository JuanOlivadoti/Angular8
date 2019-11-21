import { Output, EventEmitter } from "@angular/core";
// Model
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10),
        new Ingredient('Banana', 15)
    ];

    constructor() { }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (const ingredinent of ingredients) {
        //     this.addIngredient(ingredinent);
        // } Se emiten muchos eventos.
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}