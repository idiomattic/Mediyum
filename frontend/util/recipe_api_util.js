export const createRecipe = recipe => (
  $.ajax({
    method: 'POST',
    url: '/api/recipes',
    data: {recipe}
  })
)

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