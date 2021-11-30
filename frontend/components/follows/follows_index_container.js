import { connect } from "react-redux";
import FollowsIndex from "./follows_index";
import { fetchFollows } from "../../actions/follow_actions";

const _nullStories = []

const mSTP = state => ({
  currentUserId: state.session.currentUserId,
  stories: Object.values(state.entities.stories) || _nullStories
})

const mDTP = dispatch => ({
  fetchFollows: () => dispatch(fetchFollows()),
  
})

export default connect(mSTP, mDTP)(StoriesIndex)