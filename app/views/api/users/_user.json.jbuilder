# json.extract! user, :id, :name, :email
json.(user, :id, :name, :email)

json.recipes user.recipes

json.comments user.comments

json.follows user.follows

json.received_follows user.received_follows

json.users_followed user.users_followed

json.users_following user.users_following

# json.followed_recipes user.followed_recipes

json.followed_recipes do
  json.array!(user.followed_recipes) do |followed_recipe|
    json.(followed_recipe, :id)
  end
end

json.photoUrl url_for(user.photo) if user.photo.attached?