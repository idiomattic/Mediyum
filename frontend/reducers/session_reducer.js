import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from "../actions/session_actions";

const _nullUser = {
  id: null
}

const SessionReducer = (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return Object.assign(nextState, { id: action.user.id}) 
      // return nextState
    case SIGNOUT_CURRENT_USER:
      return _nullUser
    default:
      // debugger
      return state
  }
}

export default SessionReducer