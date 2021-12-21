// export const fetchUsers = () => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/users'
//   })
// )

export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
)

export const updateUser = user => {
  console.log('api util user.user', user.user)
  return ($.ajax({
    method: 'PATCH',
    url: `/api/users/${user.user.id}`,
    data: user.user,
    contentType: false,
    processData: false
  })
)}

export const deleteUser = userId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}`
  })
)