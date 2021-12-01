import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT, UPDATE_COMMENT } from '../actions/comment_actions'
import { HIDE_MODAL } from '../actions/modal_actions'

export default (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    case RECEIVE_COMMENT:
      return Object.assign(nextState, { [action.comment.id]: action.comment })
    case UPDATE_COMMENT:
      nextState[action.comment.id] = action.comment
      return nextState
    case REMOVE_COMMENT:
      delete nextState[action.commentId]
      return nextState
    case HIDE_MODAL:
      return {}
    default:
      return state
  }
}