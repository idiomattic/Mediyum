import { hideModal } from "../../actions/modal_actions";
import CommentsModal from "./comments_modal";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/comment_actions";

const _nullComments = []

const mSTP = state => ({
  modal: state.ui.modal,
  comments: Object.values(state.entities.comments) || _nullComments
});

const mDTP = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  fetchComments: () => dispatch(fetchComments())
});

export default connect(mSTP, mDTP)(CommentsModal);