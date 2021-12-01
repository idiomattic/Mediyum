import { connect } from "react-redux";
import StoryShow from "./story_show";
import { fetchStory, deleteStory } from "../../actions/story_actions";
import { displayModal } from "../../actions/modal_actions";
import { createYum } from "../../actions/yum_actions";

const mSTP = (state, {match}) => {
  const storyId = parseInt(match.params.storyId)
  const story = state.entities.stories[storyId]
  const yums = story ? story.yums : null
  return({
    currentUserId: state.session.currentUserId,
    story,
    storyId,
    yums
  })
}

const mDTP = dispatch => ({
  displayModal: () => dispatch(displayModal('Comments')),
  fetchStory: storyId => dispatch(fetchStory(storyId)),
  deleteStory: storyId => dispatch(deleteStory(storyId)),
  createYum: yum => dispatch(createYum(yum))
})

export default connect(mSTP, mDTP)(StoryShow)