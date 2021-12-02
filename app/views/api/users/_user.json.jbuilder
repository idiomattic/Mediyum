# json.extract! user, :id, :name, :email
json.(user, :id, :name, :email)

json.recipes user.recipes

json.comments user.comments

json.follows user.follows

json.received_follows user.received_follows

json.users_followed user.users_followed

json.users_following user.users_following

# json.photoUrl url_for(user.photo)