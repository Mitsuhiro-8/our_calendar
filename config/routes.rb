Rails.application.routes.draw do
  resources :calendars
  root "calendars#index"
end
