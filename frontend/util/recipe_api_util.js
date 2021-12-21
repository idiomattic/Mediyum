export const createRecipe = recipe => {
  console.log('recipe api util (data: recipe)', recipe)
  return (
  $.ajax({
    method: 'POST',
    url: '/api/recipes',
    data: recipe,
    contentType: false,
    processData: false
  })
)}

export const fetchRecipes = () => (
  $.ajax({
    method: 'GET',
    url: '/api/recipes'
  })
)

export const fetchRecipe = recipeId => (
  $.ajax({
    method: 'GET',
    url: `/api/recipes/${recipeId}`
  })
)

export const updateRecipe = recipe => (
  $.ajax({
    method: 'PATCH',
    url: `/api/recipes/${recipe.id}`,
    data: {recipe}
  })
)

export const deleteRecipe = recipeId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/recipes/${recipeId}`
  })
)