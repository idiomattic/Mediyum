import StoriesIndexItem from "./stories_index_item";
import { connect } from "react-redux";
import { fetchComments, createComment, deleteComment, updateComment } from "../../actions/comment_actions";

const _nullComments = []

const mSTP = state => {
  debugger
  return({
    currentUserId: state.session.currentUserId
  })
};

const mDTP = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  updateComment: comment => dispatch(updateComment(comment))
});

export default connect(mSTP, mDTP)(StoriesIndexItem);