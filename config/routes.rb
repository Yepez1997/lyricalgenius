Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
   namespace :api, defaults: { format: :json } do
    resource :session, only: [:create,:destroy]
    resource :user, only: [:create]
    resources :artists, only: [:show, :index]
    resources :albums, only: [:show,:index]
    resources :songs, only: [:show,:index]
    resources :comments, only: [:show,:index, :create, :destroy]
    resources :annotations, only: [:show,:index, :create, :destroy, :update]
    resources :links, only: [:create, :index]
  end
end
