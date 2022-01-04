import CommentsIndexItem from "./comments_index_item";
import { connect } from "react-redux";
import { fetchComments, createComment, deleteComment, updateComment } from "../../actions/comment_actions";
import { createYum } from "../../actions/yum_actions";
import { hideModal } from '../../actions/modal_actions'

const _nullComments = []

const mSTP = (state, ownProps) => {
  const recipeId = ownProps.comment.recipe_id
  let yumCount = ownProps.comment.yums ? ownProps.comment.yums.length : 0
  return ({
    recipeId,
    currentUserId: state.session.currentUserId,
    yumCount
  })
};

const mDTP = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  updateComment: comment => dispatch(updateComment(comment)),
  createYum: yum => dispatch(createYum(yum)),
  hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(CommentsIndexItem);