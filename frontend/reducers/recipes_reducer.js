import { RECEIVE_YUM } from '../actions/yum_actions'
import { RECEIVE_RECIPES, RECEIVE_RECIPE, REMOVE_RECIPE } from "../actions/recipe_actions";
import { RECEIVE_USER } from "../actions/user_actions";

export default (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_RECIPES:
      return action.recipes
    case RECEIVE_RECIPE:
      // Object.assign(nextState, {[action.recipe.id]: action.recipe})
      // return nextState
      return {[action.recipe.id]: action.recipe}
    case REMOVE_RECIPE:
      delete nextState[action.recipeId]
      return nextState
    case RECEIVE_USER:
      action.user.recipes.forEach(recipe => {nextState[recipe.id] = recipe})
      return nextState
    case RECEIVE_YUM:
      if (action.yum.recipe) {
        nextState[action.yum.recipe.id].yums.push(action.yum)
      }
      return nextState
    default:
      return state
  }
}