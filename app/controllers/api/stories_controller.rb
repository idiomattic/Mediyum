class Api::StoriesController < ApplicationController
  def create
    @story = Story.new(story_params)
    if @story.save
      render :template => 'api/stories/show'
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def index
    @stories = Story.all
    render :template => 'api/stories/index'
  end
  
  def show
    @story = Story.find(params[:id])
    render :template => 'api/stories/show'
  end
  
  def update
    @story = Story.find(params[:id])
    if (@story && @story.update(story_params))
      render json: ['Updates saved.']
    else
      render json: @story.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @story = Story.find(params[:id])
    @story.delete if @story
  end

  def story_params
    params.require(:story).permit(:title, :body, :author_id)
  end
end
