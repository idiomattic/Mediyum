import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signUp } from "../../actions/session_actions";

const mSTP = ({ errors }) => ({
  formType: 'Sign Up',
  errors: errors.session
})

const mDTP = dispatch => ({
  action: user => dispatch(signUp(user))
})

export default connect(mSTP, mDTP)(SessionForm)