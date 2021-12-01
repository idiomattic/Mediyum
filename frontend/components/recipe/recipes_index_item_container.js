import RecipesIndexItem from "./recipes_index_item";
import { connect } from "react-redux";
import { fetchComments, createComment, deleteComment, updateComment } from "../../actions/comment_actions";

const _nullComments = []

const mSTP = state => {
  return({
    currentUserId: state.session.currentUserId
  })
};

const mDTP = dispatch => ({
});

export default connect(mSTP, mDTP)(RecipesIndexItem);