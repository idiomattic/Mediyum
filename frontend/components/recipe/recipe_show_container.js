import { connect } from "react-redux";
import RecipeShow from "./recipe_show";
import { fetchRecipe, deleteRecipe } from "../../actions/recipe_actions";
import { displayModal } from "../../actions/modal_actions";
import { createYum } from "../../actions/yum_actions";

const mSTP = (state, {match}) => {
  const recipeId = parseInt(match.params.recipeId)
  const recipe = state.entities.recipes[recipeId]
  const yums = recipe ? recipe.yums : null
  return({
    currentUserId: state.session.currentUserId,
    recipe,
    recipeId,
    yums
  })
}

const mDTP = dispatch => ({
  displayModal: () => dispatch(displayModal('Comments')),
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)),
  deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId)),
  createYum: yum => dispatch(createYum(yum))
})

export default connect(mSTP, mDTP)(RecipeShow)