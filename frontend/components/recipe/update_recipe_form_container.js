import { connect } from "react-redux";
import UpdateRecipeForm from "./update_recipe_form";
import { updateRecipe, clearErrors, deleteRecipe, fetchRecipe } from "../../actions/recipe_actions";

const mSTP = (state, ownProps) => {
  // let currentRecipeId = Object.keys(state.entities.recipes)[0]
  let currentRecipeId = parseInt(ownProps.match.params.recipeId)
  // debugger
  const currentUserId = state.session.currentUserId
  const recipe = state.entities.recipes[currentRecipeId]
  console.log('in mSTP',recipe)
  return({
    currentUserId,
    currentRecipeId,
    recipe,
    author: recipe?.author,
    formType: 'Update Recipe'
  })
} 

const mDTP = dispatch => ({
  action: recipe => dispatch(updateRecipe(recipe)),
  clearErrors: () => dispatch(clearErrors()),
  deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId)),
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)),
})

export default connect(mSTP, mDTP)(UpdateRecipeForm)