class YumsController < ApplicationController
  def index
    @yums = Yum.all
    render :template => 'api/yums/index'
  end

  def create
    @yum = Yum.new(yum_params)
    if @yum.save
      render :template => 'api/yums/show'
    else
      render json: @yum.errors.full_messages, status: 422
    end
  end

  def destroy
    @yum = Yum.find(params[:id])
    @yum.delete if @yum
    @yums = Yum.all
    render :template => 'api/yums/index'
  end

  def yum_params
    params.require(:yum).permit(:yummer_id, :story_id, :comment_id)
  end
end
