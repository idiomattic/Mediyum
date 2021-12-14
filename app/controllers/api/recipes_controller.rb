class Api::RecipesController < ApplicationController
  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      render :template => 'api/recipes/show'
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end

  def index
    @recipes = Recipe.all
    render :template => 'api/recipes/index'
  end
  
  def show
    @recipe = Recipe.find(params[:id])
    render :template => 'api/recipes/show'
  end
  
  def update
    @recipe = Recipe.find(params[:id])
    if (@recipe && @recipe.update(recipe_params))
      render :template => 'api/recipes/show'
    else
      render json: @recipe.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.delete if @recipe
  end

  def recipe_params
    params.require(:recipe).permit(:title, :body, :author_id, :photo)
  end
end
