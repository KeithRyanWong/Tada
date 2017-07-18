Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update] do
      resources :projects, only: [:index]
    end

    resources :projects, only: [:index, :create, :update, :show, :destroy] do 
      resources :items, only: [:index]
      resources :comments, only: [:index]
    end

    resources :items, except: [:index, :new, :edit]

    resources :comments, except: [:create, :new, :edit, :show]

    resources :likes, only: [:create, :destroy]

    resources :views, only: [:create]

    resources :tags, only: [:create]
    
    resources :taggings, only: [:create, :destroy]

    resources :follows, only: [:create, :destroy]

    resources :galleries, only: [:index, :show, :create, :destroy, :update]
    resources :gallerylinks, only: [:create, :destroy]

    resource :session, only: [:create, :destroy]
  end
end
