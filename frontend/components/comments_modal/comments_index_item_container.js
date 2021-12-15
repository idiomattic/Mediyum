import CommentsIndexItem from "./comments_index_item";
import { connect } from "react-redux";
import { fetchComments, createComment, deleteComment, updateComment } from "../../actions/comment_actions";
import { createYum } from "../../actions/yum_actions";

const _nullComments = []

const mSTP = (state, ownProps) => {
  const recipeId = ownProps.comment.recipe_id
  return ({
    recipeId,
    currentUserId: state.session.currentUserId
  })
};

const mDTP = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  updateComment: comment => dispatch(updateComment(comment)),
  createYum: yum => dispatch(createYum(yum))
});

export default connect(mSTP, mDTP)(CommentsIndexItem);