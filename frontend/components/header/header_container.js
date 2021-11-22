import { connect } from "react-redux";
import Header from "./header";

const mSTP = state => ({
  currentUserId: state.session.currentUserId
})

const mDTP = dispatch => ({
  
})

export default connect(mSTP, mDTP)(Header)