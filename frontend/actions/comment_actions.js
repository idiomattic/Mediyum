import * as CommentApiUtil from '../util/comment_api_util'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS'
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS'


const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

const editComment = comment => ({
  type: UPDATE_COMMENT,
  comment
})

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
})

const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
})

const clearCommentErrors = () => ({
  type: CLEAR_COMMENT_ERRORS
})

export const createComment = comment => dispatch => (
  CommentApiUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)),
      errors => dispatch(receiveCommentErrors(errors.responseJSON)))
)

export const fetchComments = () => dispatch => (
  CommentApiUtil.fetchComments()
    .then(comments => dispatch(receiveComments(comments)),
      errors => dispatch(receiveCommentErrors(errors.responseJSON)))
)

export const updateComment = comment => dispatch => (
  CommentApiUtil.updateComment(comment)
    .then(comment => dispatch(editComment(comment)),
      errors => dispatch(receiveCommentErrors(errors.responseJSON)))
)

export const deleteComment = commentId => dispatch => (
  CommentApiUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)),
      errors => dispatch(receiveCommentErrors(errors.responseJSON)))
)

export const clearErrors = () => dispatch => (
  dispatch(clearCommentErrors())
)