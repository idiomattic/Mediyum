# json.extract! follow, :id, :follower_id, :followed_user_id
json.(follow, :id, :follower_id, :followed_user_id)

# json.follower follow.follower

# json.followed_user_id follow.followed_user_id