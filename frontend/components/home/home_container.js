import { connect } from "react-redux";
import Home from "./home";

const mSTP = state => ({
  currentUserId: state.session.currentUserId
})

const mDTP = dispatch => ({
  
})

export default connect(mSTP, mDTP)(Home)