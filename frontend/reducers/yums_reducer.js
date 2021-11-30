import { RECEIVE_YUMS, RECEIVE_YUM, REMOVE_YUM } from "../actions/yum_actions"

export default (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_YUMS:
      return action.yums
    case RECEIVE_YUM:
      return { [action.yum.id]: action.yum }
    case REMOVE_YUM:
      delete nextState[action.yum.id]
      return nextState
    default:
      return state
  }
}