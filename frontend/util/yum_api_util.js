export const fetchYums = () => (
  $.ajax({
    method: 'GET',
    url: '/api/yums'
  })
)

export const createYum = yum => (
  $.ajax({
    method: 'POST',
    url: '/api/yums',
    data: {yum}
  })
)

export const deleteYum = yum => (
  $.ajax({
    method: 'DELETE',
    url: `/api/yums/${yum.id}`
  })
)