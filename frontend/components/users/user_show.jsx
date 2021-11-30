import { connect } from "react-redux";


const mSTP = (state, {match}) => {
  const storyId = parseInt(match.params.storyId)
  return({
    currentUserId: state.session.currentUserId,
    story: state.entities.stories[storyId],
    storyId
  })
}

const mDTP = dispatch => ({
  displayModal: () => dispatch(displayModal('Comments')),
  fetchStory: storyId => dispatch(fetchStory(storyId)),
  deleteStory: storyId => dispatch(deleteStory(storyId))
})

export default connect(mSTP, mDTP)(StoryShow)