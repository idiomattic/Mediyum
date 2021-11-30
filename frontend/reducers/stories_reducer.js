import { RECEIVE_STORIES, RECEIVE_STORY, REMOVE_STORY } from "../actions/story_actions";
import { RECEIVE_USER } from "../actions/user_actions";

export default (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_STORIES:
      return action.stories
    case RECEIVE_STORY:
      return { [action.story.id]: action.story }
    case REMOVE_STORY:
      delete nextState[action.storyId]
      return nextState
    case RECEIVE_USER:
      action.user.stories.forEach(story => {nextState[story.id] = story})
      return nextState
    default:
      return state
  }
}