import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signIn } from "../../actions/session_actions";
import { hideModal } from "../../actions/modal_actions";

const mSTP = ({ errors }) => ({
  formType: 'Sign In',
  errors: errors.session
})

const mDTP = dispatch => ({
  action: user => dispatch(signIn(user)),
  hideModal: () => dispatch(hideModal())
})

export default connect(mSTP, mDTP)(SessionForm)