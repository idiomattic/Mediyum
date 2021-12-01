json.partial! 'api/users/user', user: @user

# unless @users_following.empty?
#   @users_following.each do |user_following|
#     json.partial! 'api/users/user', user: user_following
#   end
# end