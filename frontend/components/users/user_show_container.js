import { connect } from "react-redux";
import { fetchUser, updateUser, deleteUser } from "../../actions/user_actions";
import { fetchStories } from "../../actions/story_actions";
import UserShow from "./user_show";

const mSTP = (state, {match}) => {
  const userId = parseInt(match.params.userId)
  return({
    currentUserId: state.session.currentUserId,
    user: state.entities.users[userId],
    userId
  })
}

const mDTP = dispatch => ({
  displayModal: () => dispatch(displayModal('Comments')),
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user)),
  deleteUser: userId => dispatch(deleteUser(userId)),
  fetchStories: () => dispatch(fetchStories())
})

export default connect(mSTP, mDTP)(UserShow)