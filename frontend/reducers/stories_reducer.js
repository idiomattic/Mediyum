import { RECEIVE_YUM } from '../actions/yum_actions'
import { RECEIVE_STORIES, RECEIVE_STORY, REMOVE_STORY } from "../actions/story_actions";
import { RECEIVE_USER } from "../actions/user_actions";

export default (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_STORIES:
      return action.stories
    case RECEIVE_STORY:
      Object.assign(nextState, {[action.story.id]: action.story})
      return nextState
    case REMOVE_STORY:
      delete nextState[action.storyId]
      return nextState
    case RECEIVE_USER:
      action.user.stories.forEach(story => {nextState[story.id] = story})
      return nextState
    case RECEIVE_YUM:
      // Object.assign(nextState, {[action.yum.story.id]: action.yum.story})
      // debugger
      return nextState
    default:
      return state
  }
}