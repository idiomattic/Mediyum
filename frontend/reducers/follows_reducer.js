import { RECEIVE_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";
import { RECEIVE_RECIPES } from "../actions/recipe_actions";
import { RECEIVE_USER } from "../actions/user_actions";

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
    case RECEIVE_USER:
      action.user.received_follows.forEach(receivedFollow => {nextState[receivedFollow.id] = receivedFollow})
      return nextState
    // case RECEIVE_RECIPES:
    //   debugger
    default:
      return state
  }
}