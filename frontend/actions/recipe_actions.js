import * as RecipeApiUtil from '../util/recipe_api_util'

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'
export const REMOVE_RECIPE = 'REMOVE_RECIPE'
export const RECEIVE_RECIPE_ERRORS = 'RECEIVE_RECIPE_ERRORS'
export const CLEAR_RECIPE_ERRORS = 'CLEAR_RECIPE_ERRORS'

const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes
})

const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
})

const removeRecipe = recipeId => ({
  type: REMOVE_RECIPE,
  recipeId
})

const receiveRecipeErrors = errors => ({
  type: RECEIVE_RECIPE_ERRORS,
  errors
})

const clearRecipeErrors = () => ({
  type: CLEAR_RECIPE_ERRORS
})

export const createRecipe = recipe => dispatch => (
  RecipeApiUtil.createRecipe(recipe)
    .then(recipe => dispatch(receiveRecipe(recipe)),
      errors => dispatch(receiveRecipeErrors(errors.responseJSON)))
)

export const updateRecipe = recipe => dispatch => (
  RecipeApiUtil.updateRecipe(recipe)
    .then(recipe => dispatch(receiveRecipe(recipe)),
      errors => dispatch(receiveRecipeErrors(errors.responseJSON)))
)

export const fetchRecipes = () => dispatch => (
  RecipeApiUtil.fetchRecipes()
    .then(recipes => dispatch(receiveRecipes(recipes)),
      errors => dispatch(receiveRecipeErrors(errors.responseJSON)))
)

export const fetchRecipe = recipeId => dispatch => (
  RecipeApiUtil.fetchRecipe(recipeId)
    .then(recipe => dispatch(receiveRecipe(recipe)),
      errors => dispatch(receiveRecipeErrors(errors.responseJSON)))
)


export const deleteRecipe = recipeId => dispatch => (
  RecipeApiUtil.deleteRecipe(recipeId)
    .then(() => dispatch(removeRecipe(recipeId)),
      errors => dispatch(receiveRecipeErrors(errors.responseJSON)))
)

export const clearErrors = () => dispatch => (
  dispatch(clearRecipeErrors())
)