import { connect } from "react-redux";
import UpdateRecipeForm from "./update_recipe_form";
import { updateRecipe, clearErrors, deleteRecipe, fetchRecipe } from "../../actions/recipe_actions";

const mSTP = (state, ownProps) => {
  let currentRecipeId = parseInt(ownProps.match.params.recipeId)
  const currentUserId = state.session.currentUserId
  const recipe = state.entities.recipes[currentRecipeId]
  return({
    currentUserId,
    currentRecipeId,
    recipe,
    author: recipe?.author,
    formType: 'Update Recipe',
    errors: state.errors.recipes
  })
} 

const mDTP = dispatch => ({
  action: recipe => dispatch(updateRecipe(recipe)),
  clearErrors: () => dispatch(clearErrors()),
  deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId)),
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)),
})

export default connect(mSTP, mDTP)(UpdateRecipeForm)