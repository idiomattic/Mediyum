import * as YumApiUtil from '../util/yum_api_util'

export const RECEIVE_YUMS = 'RECEIVE_YUMS'
export const RECEIVE_YUM = 'RECEIVE_YUM'
export const REMOVE_YUM = 'REMOVE_YUM'
export const RECEIVE_YUM_ERRORS = 'RECEIVE_YUM_ERRORS'
export const CLEAR_YUM_ERRORS = 'CLEAR_YUM_ERRORS'

const receiveYums = yums => ({
  type: RECEIVE_YUMS,
  yums
})

const receiveYum = yum => ({
  type: RECEIVE_YUM,
  yum
})

const removeYum = yum => ({
  type: REMOVE_YUM,
  yum
})

const receiveYumErrors = errors => ({
  type: RECEIVE_YUM_ERRORS,
  errors
})

const clearYumErrors = () => ({
  type: CLEAR_YUM_ERRORS
})

export const createYum = yum => dispatch => (
  YumApiUtil.createYum(yum)
    .then(yum => dispatch(receiveYum(yum)),
      errors => dispatch(receiveYumErrors(errors.responseJSON)))
)
export const fetchYums = () => dispatch => (
  YumApiUtil.fetchYums()
    .then(yums => dispatch(receiveYums(yums)),
      errors => dispatch(receiveYumErrors(errors.responseJSON)))
)
export const deleteYum = yum => dispatch => (
  YumApiUtil.deleteYum(yum)
    .then(() => dispatch(removeYum(yum)),
      errors => dispatch(receiveYumErrors(errors.responseJSON)))
)

export const clearErrors = () => dispatch => (
  dispatch(clearYumErrors())
)