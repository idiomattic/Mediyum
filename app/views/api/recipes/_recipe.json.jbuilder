# json.extract! recipe, :id, :title, :body, :author_id
json.(recipe, :id, :title, :body, :author_id, :updated_at)

json.photoUrl url_for(recipe.photo) if recipe.photo.attached?

json.author do
  json.partial! 'api/users/user', user: recipe.author
end

# json.comments do
#   recipe.comments.each do |comment|
#     json.partial! 'api/comments/comment', comment: comment
#   end
# end
json.comments recipe.comments

json.yums recipe.yums

json.users_who_yummed recipe.users_who_yummed
