import { RECEIVE_COMMENT_ERRORS, CLEAR_COMMENT_ERRORS } from "../actions/comment_actions";

const _nullErrors = []

export default (state=[], action) => {
  Object.freeze(state)
  let nextState = state.slice()
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors
    case CLEAR_COMMENT_ERRORS:
      return _nullErrors
    default:
      return state
  }
}