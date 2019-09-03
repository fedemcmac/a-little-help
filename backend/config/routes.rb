Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
        resources :users #, only: [:index, :create, :show]
        resources :jobs #, only: [:index, :create, :show, :update]
        post '/login', to: 'auth#login'
        get '/validate', to: 'auth#validate_token'
        get '/browse_jobs', to: 'jobs#browse_jobs'
        post '/accept_job', to: 'jobs#accept_job'
        delete '/drop_job', to: 'users#drop_job'
        # update '/edit_job', to: 'tasks#update'
  end
end
