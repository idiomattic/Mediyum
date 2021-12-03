import { connect } from "react-redux";
import UserNav from "./user_nav";
import { displayModal } from "../../actions/modal_actions";
import { signOut } from "../../actions/session_actions";

const mSTP = state => {
  const currentUserId = state.session.currentUserId
  return({
    currentUserId,
    currentUser: state.entities.users[currentUserId]
  })
}

const mDTP = dispatch => ({
  displayModal: () => dispatch(displayModal('Dropdown')),
  signOut: () => dispatch(signOut())
})

export default connect(mSTP, mDTP)(UserNav)