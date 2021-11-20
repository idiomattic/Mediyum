import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS'

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const signIn = user => dispatch => (
  SessionApiUtil.signIn(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveErrors(error.responseJSON)))
)

export const signUp = user => dispatch => (
  SessionApiUtil.signUp(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      error => dispatch(receiveErrors(error.responseJSON)))
)

export const signOut = () => dispatch => (
  SessionApiUtil.signOut()
    .then(() => dispatch(signoutCurrentUser()),
      error => dispatch(receiveErrors(error.responseJSON)))
)