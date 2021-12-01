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
      Object.assign(nextState, {[action.recipe.id]: action.recipe})
      return nextState
    case REMOVE_RECIPE:
      delete nextState[action.recipeId]
      return nextState
    case RECEIVE_USER:
      action.user.recipes.forEach(recipe => {nextState[recipe.id] = recipe})
      return nextState
    case RECEIVE_YUM:
      // Object.assign(nextState, {[action.yum.recipe.id]: action.yum.recipe})
      // debugger
      nextState[action.yum.recipe.id].yums.push(action.yum)
      // nextState.recipes.yums[action.yum.id] = action.yum
      // return Object.assign(nextState, { [action.yum.id]: action.yum })
      // debugger
      return nextState
    default:
      return state
  }
}