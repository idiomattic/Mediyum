export const createStory = story => (
  $.ajax({
    method: 'POST',
    url: '/api/stories',
    data: {story}
  })
)

export const fetchStories = () => (
  $.ajax({
    method: 'GET',
    url: '/api/stories'
  })
)
// export const fetchStories = stories => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/stories',
//     data: {stories}
//   })
// )

export const fetchStory = storyId => (
  $.ajax({
    method: 'GET',
    url: `/api/stories/${storyId}`
  })
)

export const updateStory = story => (
  $.ajax({
    method: 'PATCH',
    url: `/api/stories${story.id}`,
    data: {story}
  })
)

export const deleteStory = storyId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/stories/${storyId}`
  })
)