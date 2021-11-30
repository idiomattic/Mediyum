import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions'
import { RECEIVE_STORIES } from '../actions/story_actions'

let currentUserId = null

export default (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      currentUserId = action.user.id
      return Object.assign(nextState, { [currentUserId]: action.user})
    case SIGNOUT_CURRENT_USER:
      delete nextState[currentUserId]
      currentUserId = null
      return nextState
    case RECEIVE_USER:
      return Object.assign(nextState, { [action.user.id]: action.user})
    case RECEIVE_USERS:
      return action.users
    case RECEIVE_STORIES:
      // debugger
      Object.values(action.stories).forEach(story => {
        Object.assign(nextState, {[story.author.id]: story.author})
      })
      return nextState
    default:
      return state
  }
}