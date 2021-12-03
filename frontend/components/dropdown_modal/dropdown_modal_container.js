import { hideModal } from "../../actions/modal_actions";
import DropdownModal from "./dropdown_modal.";
import { connect } from "react-redux";
import { signOut } from "../../actions/session_actions";

const mSTP = state => {
  let currentUserId = state.session.currentUserId
  let currentUser = state.entities.users[currentUserId]
  return({
    currentUserId,
    currentUser,
    modal: state.ui.modal
  })
};

const mDTP = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  signOut: () => dispatch(signOut())
});

export default connect(mSTP, mDTP)(DropdownModal);