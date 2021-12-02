# json.extract! recipe, :id, :title, :body, :author_id
json.(recipe, :id, :title, :body, :author_id)

json.photoUrl url_for(recipe.photo) if recipe.photo.attached?

json.author recipe.author

json.comments recipe.comments

json.yums recipe.yums

json.users_who_yummed recipe.users_who_yummed
