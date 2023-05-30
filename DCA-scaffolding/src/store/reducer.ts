import { Actions, AppState, SomeActions } from "../types/store";


export const reducer = (actions: Actions, state: AppState) => {
const {action, payload} = actions
switch (action) {
    case SomeActions.SAVE_RECIPES:
        state.recipes = [...state.recipes, payload]
        return state
        break;

    default:
        return state
        break;
}
}