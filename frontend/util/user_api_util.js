// export const fetchUsers = () => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/users'
//   })
// )

import user_recipes_index_item from "../components/recipe/user_recipes_index_item"

export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
)

export const updateUser = (user, userId) => {
  console.log('api util user.id', user.id)
  return ($.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`,
    data: user,
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