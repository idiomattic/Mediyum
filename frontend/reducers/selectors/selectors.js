export const selectStory = ({stories}, id) => {
  if (stories[id]) { return stories[id] }
  return {}
}