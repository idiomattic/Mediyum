import { connect } from "react-redux";
import { fetchUser, updateUser, deleteUser } from "../../actions/user_actions";
import { fetchRecipes } from "../../actions/recipe_actions";
import UserShow from "./user_show";
import { createFollow, deleteFollow, fetchFollows } from "../../actions/follow_actions";

const mSTP = (state, {match}) => {
  const userId = parseInt(match.params.userId)
  const user = state.entities.users[userId]
  return({
    currentUserId: state.session.currentUserId,
    user,
    userId,
    followers: state.entities.users.followers,
    receivedFollows: state.entities.follows
  })
}

const mDTP = dispatch => ({
  displayModal: () => dispatch(displayModal('Comments')),
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user)),
  deleteUser: userId => dispatch(deleteUser(userId)),
  fetchRecipes: () => dispatch(fetchRecipes()),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: followId => dispatch(deleteFollow(followId)),
  fetchFollows: () => dispatch(fetchFollows())
})

export default connect(mSTP, mDTP)(UserShow)