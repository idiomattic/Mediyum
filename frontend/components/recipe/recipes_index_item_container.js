import RecipesIndexItem from "./recipes_index_item";
import { connect } from "react-redux";
import { displayModal } from "../../actions/modal_actions";

const _nullComments = []

const mSTP = state => {
  return({
    currentUserId: state.session.currentUserId
  })
};

const mDTP = dispatch => ({
  displayModal: formType => dispatch(displayModal(formType))
});

export default connect(mSTP, mDTP)(RecipesIndexItem);