import { connect } from "react-redux";
import StoriesIndex from "./stories_index";
import { fetchStories } from "../../actions/story_actions";

const _nullStories = []

const mSTP = state => {
  return(
    {currentUserId: state.session.currentUserId,
    stories: Object.values(state.entities.stories) || _nullStories}
  )
}

const mDTP = dispatch => ({
  fetchStories: stories => dispatch(fetchStories(stories))
})

export default connect(mSTP, mDTP)(StoriesIndex)