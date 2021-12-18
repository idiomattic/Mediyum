import { connect } from "react-redux";
import UpdateRecipeForm from "./update_recipe_form";
import { updateRecipe, clearErrors, deleteRecipe, fetchRecipe } from "../../actions/recipe_actions";

const mSTP = state => {
  let currentRecipeId = Object.keys(state.entities.recipes)[0]
  const currentUserId = state.session.currentUserId
  // debugger
  const author = state.entities.recipes[currentRecipeId]?.author
  return({
    currentUserId,
    author,
    formType: 'Update Recipe',
    preloadedInfo: state.entities.recipes[currentRecipeId],
    currentRecipeId
  })
} 

const mDTP = dispatch => ({
  action: recipe => dispatch(updateRecipe(recipe)),
  clearErrors: () => dispatch(clearErrors()),
  deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId)),
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)),
})

export default connect(mSTP, mDTP)(UpdateRecipeForm)