import { hideModal } from "../../actions/modal_actions";
import DropdownModal from "./dropdown_modal.";
import { connect } from "react-redux";

const mSTP = state => ({
  modal: state.ui.modal
});

const mDTP = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(mSTP, mDTP)(DropdownModal);