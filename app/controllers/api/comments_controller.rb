class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all
    # render json: @comments
    render :template => 'api/comments/index'
  end
  
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
    #   render json: ['Comment saved.']
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if (@comment && @comment.update(comment_params))
      # render json: @comment
      # @comments = Comment.all
      # render json: @comments
      render :template => 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.delete if @comment
    @comments = Comment.all
    render :template => 'api/comments/index'
  end

  def comment_params
    params.require(:comment).permit(:body, :commenter_id, :recipe_id)
  end
  
end
