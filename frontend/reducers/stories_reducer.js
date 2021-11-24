import { RECEIVE_STORIES, RECEIVE_STORY, REMOVE_STORY } from "../actions/story_actions";

export default (state={}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_STORIES:
      return action.stories
    case RECEIVE_STORY:
      return Object.assign(nextState, { [action.story.id]: action.story })
    case REMOVE_STORY:
      delete nextState[action.storyId]
      return nextState
    default:
      break;
  }
}