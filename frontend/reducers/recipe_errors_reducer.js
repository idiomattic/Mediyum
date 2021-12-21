import { RECEIVE_RECIPE_ERRORS, CLEAR_RECIPE_ERRORS, RECEIVE_RECIPE, RECEIVE_RECIPES } from "../actions/recipe_actions";

const _nullErrors = []

export default (state=[], action) => {
  Object.freeze(state)
  let nextState = state.slice()
  switch (action.type) {
    case RECEIVE_RECIPE_ERRORS:
      return action.errors
    case CLEAR_RECIPE_ERRORS:
      return _nullErrors
    case RECEIVE_RECIPE:
      return _nullErrors
    case RECEIVE_RECIPES:
      return _nullErrors
    default:
      return state
  }
}