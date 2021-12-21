class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @users_following = @user.users_following
    render :template => 'api/users/show'
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :template => "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = User.find(params[:id])
    if (@user && @user.update(user_params))
      render :template => "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  def user_params
    params.permit(:id, :name, :email, :password, :photo)
  end
end
