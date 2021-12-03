import { hideModal } from "../../actions/modal_actions";
import CommentsModal from "./comments_modal";
import { connect } from "react-redux";
import { fetchComments, createComment, deleteComment, updateComment } from "../../actions/comment_actions";

const _nullComments = []

const mSTP = state => ({
  modal: state.ui.modal,
  comments: Object.values(state.entities.comments) || _nullComments,
  recipe: Object.values(state.entities.recipes)[0],
  currentUserId: state.session.currentUserId
});

const mDTP = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  fetchComments: () => dispatch(fetchComments()),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  updateComment: comment => dispatch(updateComment(comment))
});

export default connect(mSTP, mDTP)(CommentsModal);