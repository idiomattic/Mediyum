class Api::SessionsController < ApplicationController
  before_action :require_signed_in, only: [:destroy]
  
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      sign_in(@user)
      render :template => "api/users/show"
    else
      render json: ['Invalid credentials.'], status: 401
    end
  end

  def destroy
    sign_out
    render json: {}
  end
end
