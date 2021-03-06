Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :collections, only: [:index, :show, :create, :update, :destroy]
    resources :notes, only: [:index, :show, :create, :update, :destroy]
  end

  root "static_pages#root"
end
