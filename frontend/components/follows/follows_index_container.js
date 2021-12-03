import { connect } from "react-redux";
import FollowsIndex from "./follows_index";
import { fetchFollows } from "../../actions/follow_actions";

const _nullFollows = []

const mSTP = state => ({
  currentUserId: state.session.currentUserId,
  follows: Object.values(state.entities.follows) || _nullFollows
})

const mDTP = dispatch => ({
  fetchFollows: () => dispatch(fetchFollows()),
})

export default connect(mSTP, mDTP)(RecipesIndex)