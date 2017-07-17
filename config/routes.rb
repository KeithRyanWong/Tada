Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api do
    resources :users, only: [:create, :update] do
      resources :projects, only: [:index]
    end

    resources :projects, only: [:create, :update, :show, :destroy] do resources :items, shallow: true, except: [:new, :edit]
      resources :comments, shallow: true, except: [:new, :edit, :show]
    end

    resources :likes, only: [:create, :destroy]
    resources :views, only: [:create]

    resources :tags, only: [:create, :destroy]
    resources :taggings, only: [:create, :destroy]

    resources :follows, only: [:create, :destroy]

    resources :galleries, only: [:index, :show, :create, :destroy, :update]
    resources :gallerylinks, only: [:create, :destroy]

    resource :session, only: [:create, :destroy]
  end
end
