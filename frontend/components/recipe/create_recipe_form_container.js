import { connect } from "react-redux";
import RecipeForm from "./recipe_form";
import { createRecipe, clearErrors } from "../../actions/recipe_actions";

const mSTP = state => {
  const currentUserId = state.session.currentUserId
  return ({
    currentUserId,
    formType: 'Create Recipe',
    author: state.entities.users[currentUserId]
  })
}

const mDTP = dispatch => ({
  action: recipe => dispatch(createRecipe(recipe)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(RecipeForm)