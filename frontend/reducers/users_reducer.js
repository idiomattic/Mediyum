import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions'
import { RECEIVE_RECIPE, RECEIVE_RECIPES } from '../actions/recipe_actions'
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions"

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
      let usersFollowing = {}
      if (action.user.users_following.length > 0) {
        action.user.users_following.forEach(user => {usersFollowing[user.id] = user})
      }
      nextState['followers'] = usersFollowing
      return Object.assign(nextState, { [action.user.id]: action.user})
    case RECEIVE_USERS:
      return action.users
    case RECEIVE_RECIPES:
      Object.values(action.recipes).forEach(recipe => {
        Object.assign(nextState, {[recipe.author.id]: recipe.author})
      })
      return nextState
    case RECEIVE_RECIPE:
      const followers = {}
      action.recipe.author.users_following.forEach(user => followers[user.id] = user)
      return Object.assign(nextState, {
        [action.recipe.author_id]: action.recipe.author,
        followers
      })
    case RECEIVE_FOLLOW:
      nextState['followers'][action.follow.follower_id] = action.follow.follower
      return nextState
    case REMOVE_FOLLOW:
      delete nextState['followers'][action.follow.follower_id]
      return nextState
    default:
      return state
  }
}