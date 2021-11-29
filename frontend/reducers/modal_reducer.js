import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { DISPLAY_MODAL, HIDE_MODAL } from "../actions/modal_actions";

export default (state=null, action) => {
  switch (action.type) {
    case DISPLAY_MODAL:
      return action.modal
    case HIDE_MODAL:
      return null
    default:
      return state
  }
}