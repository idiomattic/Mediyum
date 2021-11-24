import { connect } from "react-redux";
import StoriesIndex from "./stories_index";
import { fetchStories } from "../../actions/story_actions";

const mSTP = state => ({
  currentUserId: state.session.currentUserId
})

const mDTP = dispatch => ({
  fetchStories: stories => dispatch(fetchStories(stories))
})

export default connect(mSTP, mDTP)(StoriesIndex)