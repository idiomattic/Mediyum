import { connect } from "react-redux";
import StoryForm from "./story_form";
import { createStory, clearErrors } from "../../actions/story_actions";

const mSTP = state => ({
  currentUserId: state.session.currentUserId
})

const mDTP = dispatch => ({
  action: story => dispatch(createStory(story)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(StoryForm)