import * as FollowApiUtil from '../util/follow_api_util'

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS'
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW'
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW'
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS'
export const CLEAR_FOLLOW_ERRORS = 'CLEAR_FOLLOW_ERRORS'

const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows
})

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
})

const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
})

const receiveFollowErrors = errors => ({
  type: RECEIVE_FOLLOW_ERRORS,
  errors
})

const clearFollowErrors = () => ({
  type: CLEAR_FOLLOW_ERRORS
})

export const createFollow = follow => dispatch => (
  FollowApiUtil.createFollow(follow)
    .then(follow => dispatch(receiveFollow(follow)),
      errors => dispatch(receiveFollowErrors(errors.responseJSON)))
)
export const fetchFollows = () => dispatch => (
  FollowApiUtil.fetchFollows()
    .then(follows => dispatch(receiveFollows(follows)),
      errors => dispatch(receiveFollowErrors(errors.responseJSON)))
)
export const deleteFollow = follow => dispatch => (
  FollowApiUtil.deleteFollow(follow)
    .then(() => dispatch(removeFollow(follow)),
      errors => dispatch(receiveFollowErrors(errors.responseJSON)))
)

export const clearErrors = () => dispatch => (
  dispatch(clearFollowErrors())
)