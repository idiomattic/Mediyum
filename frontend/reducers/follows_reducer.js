import { RECEIVE_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";

export default (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_FOLLOWS:
      return action.follows
    case RECEIVE_FOLLOW:
      return { [action.follow.id]: action.follow }
    case REMOVE_FOLLOW:
      delete nextState[action.follow.id]
      return nextState
    default:
      return state
  }
}