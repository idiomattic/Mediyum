import { connect } from "react-redux";
import { fetchUser, updateUser, deleteUser } from "../../actions/user_actions";
import { fetchStories } from "../../actions/story_actions";
import UserShow from "./user_show";
import { createFollow, deleteFollow, fetchFollows } from "../../actions/follow_actions";

const mSTP = (state, {match}) => {
  const userId = parseInt(match.params.userId)
  const user = state.entities.users[userId]
  // debugger
  return({
    currentUserId: state.session.currentUserId,
    user,
    userId,
    // followed: Boolean(user.users_following[currentUserId])
  })
}

const mDTP = dispatch => ({
  displayModal: () => dispatch(displayModal('Comments')),
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user)),
  deleteUser: userId => dispatch(deleteUser(userId)),
  fetchStories: () => dispatch(fetchStories()),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: followId => dispatch(deleteFollow(followId)),
  fetchFollows: () => dispatch(fetchFollows())
})

export default connect(mSTP, mDTP)(UserShow)