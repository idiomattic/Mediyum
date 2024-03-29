Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update]
    resources :recipes, only: [:create, :destroy, :index, :show, :update]
    resources :comments, only: [:create, :destroy, :update, :index]
    resources :follows, only: [:create, :destroy]
    resources :yums, only: [:create, :destroy]

    resources :users, only: [:show] do
      resources :follows, only: [:index]
      resources :yums, only: [:index]
    end
    
  end
end
