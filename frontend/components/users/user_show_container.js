import { connect } from "react-redux";
import { fetchUser, updateUser, deleteUser } from "../../actions/user_actions";
import { fetchRecipes } from "../../actions/recipe_actions";
import UserShow from "./user_show";
import { createFollow, deleteFollow, fetchFollows } from "../../actions/follow_actions";
import { displayModal } from "../../actions/modal_actions";

const mSTP = (state, {match}) => {
  const userId = parseInt(match.params.userId)
  const user = state.entities.users[userId]
  const currentUserId = state.session.currentUserId
  return({
    currentUserId,
    user,
    userId
  })
}

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: (user, userId) => dispatch(updateUser(user, userId)),
  deleteUser: userId => dispatch(deleteUser(userId)),
  fetchRecipes: () => dispatch(fetchRecipes())
})

export default connect(mSTP, mDTP)(UserShow)