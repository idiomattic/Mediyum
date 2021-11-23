import { connect } from "react-redux";
import GuestNav from "./guest_nav";
import { signIn, signUp } from "../../actions/session_actions";
import { displayModal } from "../../actions/modal_actions";

const mSTP = state => ({
  currentUserId: state.session.currentUserId
})

const mDTP = dispatch => ({
  signIn: user => dispatch(signIn(user)),
  signUp: () => dispatch(signUp()),
  displayModal: formType => dispatch(displayModal(formType)),
  // signInDemo: demoUser => dispatch(signInDemo(demoUser))
})

export default connect(mSTP, mDTP)(GuestNav)