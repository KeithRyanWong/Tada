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
      resources :likes, only: [:create]
    end

    resources :users, except: [:new, :create, :edit, :update, :destroy]

    resources :items, except: [:index, :new, :edit]

    resources :comments, except: [:new, :edit, :show]

    resources :views, only: [:create]

    resources :tags, only: [:create]
    
    resources :taggings, only: [:create, :destroy]

    resources :follows, only: [:create, :destroy]

    resources :galleries, only: [:index, :show, :create, :destroy, :update]
    resources :gallerylinks, only: [:create, :destroy]

    resource :session, only: [:create, :destroy]
  end

  delete 'api/projects/:id/likes', to: 'api/likes#destroy', defaults: {format: :json}
end
