export const signIn = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user,
    contentType: false,
    processData: false
  })
)

export const signUp = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user,
    contentType: false,
    processData: false
  })
)

export const signOut = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)

