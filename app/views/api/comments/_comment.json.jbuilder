# json.extract! comment, :id, :body, :commenter_id, :recipe_id
json.(comment, :id, :body, :commenter_id, :recipe_id)

# json.commenter comment.commenter
json.commenter do
  json.partial! 'api/users/user', user: comment.commenter
end

json.recipe comment.recipe

json.yums comment.yums