import { connect } from "react-redux";
import StoriesIndex from "./stories_index";
import { fetchStories } from "../../actions/story_actions";

const _nullStories = []

const mSTP = state => ({
  currentUserId: state.session.currentUserId,
  stories: Object.values(state.entities.stories) || _nullStories
})

const mDTP = dispatch => ({
  fetchStories: () => dispatch(fetchStories())
})

export default connect(mSTP, mDTP)(StoriesIndex)