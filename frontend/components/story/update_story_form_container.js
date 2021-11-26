import { connect } from "react-redux";
import UpdateStoryForm from "./update_story_form";
import { updateStory, clearErrors } from "../../actions/story_actions";

const mSTP = state => {
  let currentStoryId = Object.keys(state.entities.stories)[0]
  return({
    currentUserId: state.session.currentUserId,
    formType: 'Update Story',
    preloadedInfo: state.entities.stories[currentStoryId]
  })
} 

const mDTP = dispatch => ({
  action: story => dispatch(updateStory(story)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(UpdateStoryForm)