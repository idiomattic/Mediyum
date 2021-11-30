json.partial! 'api/users/user', user: @user

unless @followees.empty?
  @followees.each do |followee|
    json.partial! 'api/users/user', user: followee
  end
end