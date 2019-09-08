Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
        resources :users #, only: [:index, :create, :show]
        resources :jobs
        post '/login', to: 'auth#login'
        get '/validate', to: 'auth#validate_token'
        get '/jobs', to: 'jobs#index'
        post '/accept_job', to: 'jobs#accept_job'
        delete '/drop_job', to: 'users#drop_job'
  end
end
