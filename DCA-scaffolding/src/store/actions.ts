import { Recipe } from "../types/recipes"
import { Actions, SomeActions } from "../types/store"
import firebase from "../utils/firebase"

export const saveRecipes = async (recipe: Recipe): Promise<Actions> => {
    await firebase.saveRecipesInDB(recipe)
    return{
        action: SomeActions.SAVE_RECIPES,
        payload: recipe,
    }

}

export const getRecipes = () => {

}