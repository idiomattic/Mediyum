# json.extract! comment, :id, :body, :commenter_id, :recipe_id
json.(comment, :id, :body, :commenter_id, :recipe_id)

json.commenter comment.commenter

json.recipe comment.recipe

json.yums comment.yums