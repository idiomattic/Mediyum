import { hideModal } from "../../actions/modal_actions";
import CommentsModal from "./comments_modal";
import { connect } from "react-redux";
import { fetchComments, createComment } from "../../actions/comment_actions";

const _nullComments = []

const mSTP = state => ({
  modal: state.ui.modal,
  comments: Object.values(state.entities.comments) || _nullComments,
  story: Object.values(state.entities.stories)[0],
  currentUserId: state.session.currentUserId
});

const mDTP = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  fetchComments: () => dispatch(fetchComments()),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(CommentsModal);