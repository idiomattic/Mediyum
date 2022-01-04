import { connect } from "react-redux";
import UserShowHeader from "./userShowHeader";
import { displayModal } from "../../actions/modal_actions";
import { createFollow, deleteFollow } from '../../actions/follow_actions'

const mSTP = (state, {match}) => {
  const userId = parseInt(match.params.userId)
  const user = state.entities.users[userId]
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
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: followId => dispatch(deleteFollow(followId)),
  fetchFollows: () => dispatch(fetchFollows())
})

export default connect(mSTP, mDTP)(UserShowHeader)