Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :stories, only: [:create, :destroy, :index, :show, :update]
    resources :comments, only: [:create, :destroy, :update, :index]
    resources :follows, only: [:create, :destroy, :index]
  end
end
