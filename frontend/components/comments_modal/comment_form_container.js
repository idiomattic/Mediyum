import { hideModal } from "../../actions/modal_actions";
import CommentForm from "./comment_form";
import { connect } from "react-redux";
import { createComment, updateComment } from "../../actions/comment_actions";

const _nullComments = []

const mSTP = state => ({
  modal: state.ui.modal,
  story: Object.values(state.entities.stories)[0],
  currentUserId: state.session.currentUserId
});

const mDTP = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  createComment: comment => dispatch(createComment(comment)),
  updateComment: comment => dispatch(updateComment(comment))
});

export default connect(mSTP, mDTP)(CommentForm);