import * as StoryApiUtil from '../util/story_api_util'

export const RECEIVE_STORIES = 'RECEIVE_STORIES'
export const RECEIVE_STORY = 'RECEIVE_STORY'
export const REMOVE_STORY = 'REMOVE_STORY'
export const RECEIVE_STORY_ERRORS = 'RECEIVE_STORY_ERRORS'
export const CLEAR_STORY_ERRORS = 'CLEAR_STORY_ERRORS'

const receiveStories = stories => ({
  type: RECEIVE_STORIES,
  stories
})

const receiveStory = story => ({
  type: RECEIVE_STORY,
  story
})

const removeStory = storyId => ({
  type: REMOVE_STORY,
  storyId
})

const receiveStoryErrors = errors => ({
  type: RECEIVE_STORY_ERRORS,
  errors
})

const clearStoryErrors = () => ({
  type: CLEAR_STORY_ERRORS
})

export const createStory = story => dispatch => (
  StoryApiUtil.createStory(story)
    .then(story => dispatch(receiveStory(story)),
      errors => dispatch(receiveStoryErrors(errors.responseJSON)))
)

export const fetchStories = stories => dispatch => (
  StoryApiUtil.fetchStories(stories)
    .then(stories => dispatch(receiveStories(stories)),
      errors => dispatch(receiveStoryErrors(errors.responseJSON)))
)

export const fetchStory = storyId => dispatch => (
  StoryApiUtil.fetchStory(storyId)
    .then(story => dispatch(receiveStory(story)),
      errors => dispatch(receiveStoryErrors(errors.responseJSON)))
)

export const updateStory = story => dispatch => (
  StoryApiUtil.updateStory(story)
    .then(story => dispatch(receiveStory(story)),
      errors => dispatch(receiveStoryErrors(errors.responseJSON)))
)

export const deleteStory = storyId => dispatch => (
  StoryApiUtil.deleteStory(storyId)
    .then(() => dispatch(removeStory(storyId)),
      errors => dispatch(receiveStoryErrors(errors.responseJSON)))
)

export const clearErrors = () => dispatch => (
  dispatch(clearStoryErrors())
)