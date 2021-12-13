import { connect } from "react-redux";
import GuestRecipesIndex from './guest_recipe_index'
import { fetchRecipes } from "../../actions/recipe_actions";

const _nullRecipes = []

const mSTP = state => {
  const currentUserId = state.session.currentUserId
  return({
    currentUserId,
    recipes: Object.values(state.entities.recipes) || _nullRecipes,
    currentUser: state.entities.users[currentUserId]
  })
}

const mDTP = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes())
})

export default connect(mSTP, mDTP)(GuestRecipesIndex)