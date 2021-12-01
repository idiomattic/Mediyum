import { connect } from "react-redux";
import RecipesIndex from "./recipes_index";
import { fetchRecipes } from "../../actions/recipe_actions";

const _nullRecipes = []

const mSTP = state => ({
  currentUserId: state.session.currentUserId,
  recipes: Object.values(state.entities.recipes) || _nullRecipes
})

const mDTP = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes())
})

export default connect(mSTP, mDTP)(RecipesIndex)