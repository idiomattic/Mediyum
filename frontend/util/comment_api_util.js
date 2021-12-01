export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: {comment}
  })
)

// const fetchComment = comment => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/comments/${comment.id}`
//   })
// )

export const fetchComments = () => (
  $.ajax({
    method: 'GET',
    url: '/api/comments'
  })
)


export const updateComment = comment => (
  $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: {comment}
  })
)

export const deleteComment = commentId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  })
)