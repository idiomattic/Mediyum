import { connect } from "react-redux";
import StoryShow from "./story_show";
import { fetchStory } from "../../actions/story_actions";

const mSTP = (state, {match}) => {
  const storyId = parseInt(match.params.storyId)
  return({
    currentUserId: state.session.currentUserId,
    story: state.entities.stories[storyId],
    storyId
  })
}

const mDTP = dispatch => ({
  fetchStory: storyId => dispatch(fetchStory(storyId))
})

export default connect(mSTP, mDTP)(StoryShow)