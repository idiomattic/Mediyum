import { connect } from "react-redux";
import GuestNav from "./guest_nav";
import { signIn, signUp } from "../../actions/session_actions";

const mSTP = state => ({
  currentUserId: state.session.currentUserId
})

const mDTP = dispatch => ({
  signIn: () => dispatch(signIn()),
  signUp: () => dispatch(signUp())
})

export default connect(mSTP, mDTP)(GuestNav)