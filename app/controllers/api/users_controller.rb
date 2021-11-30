class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
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
  
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
