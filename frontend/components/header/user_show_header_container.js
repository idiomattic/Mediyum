import { connect } from "react-redux";
import UserShowHeader from "./userShowHeader";
import { displayModal } from "../../actions/modal_actions";
import { createFollow, deleteFollow } from '../../actions/follow_actions'
import { fetchUser, updateUser } from "../../actions/user_actions";

const mSTP = (state, {match}) => {
  let {authorId, recipeId, userId} = match.params
  let shownUserId
  if (userId) {
    shownUserId = parseInt(userId)
  } else if (authorId) {
    shownUserId = parseInt(authorId)
  }
  const user = state.entities.users[shownUserId]
  const currentUserId = state.session.currentUserId
  return({
    currentUserId,
    currentUser: state.entities.users[currentUserId],
    user,
    userId,
    followers: state.entities.users.followers,
    receivedFollows: state.entities.follows
  })
}

const mDTP = dispatch => ({
  displayModal: () => dispatch(displayModal('Dropdown')),
  fetchUser: userId => dispatch(fetchUser(userId)),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: followId => dispatch(deleteFollow(followId)),
  fetchFollows: () => dispatch(fetchFollows()),
  updateUser: user => dispatch(updateUser(user))
})

export default connect(mSTP, mDTP)(UserShowHeader)