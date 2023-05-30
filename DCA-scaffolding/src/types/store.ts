import { Recipe } from "./recipes";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recipes: Recipe [];
};

export enum SomeActions {
  "SAVE_RECIPES" = "SAVE_RECIPES",
}

export interface SaveRecipeAction {
  action: SomeActions.SAVE_RECIPES;
  payload: Recipe;
}

export type Actions = SaveRecipeAction;
