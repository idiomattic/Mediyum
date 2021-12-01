import { connect } from "react-redux";
import UpdateRecipeForm from "./update_recipe_form";
import { updateRecipe, clearErrors } from "../../actions/recipe_actions";

const mSTP = state => {
  let currentRecipeId = Object.keys(state.entities.recipes)[0]
  return({
    currentUserId: state.session.currentUserId,
    formType: 'Update Recipe',
    preloadedInfo: state.entities.recipes[currentRecipeId]
  })
} 

const mDTP = dispatch => ({
  action: recipe => dispatch(updateRecipe(recipe)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(UpdateRecipeForm)