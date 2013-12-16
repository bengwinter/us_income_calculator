AmericanWealth::Application.routes.draw do
  root 'entries#index'
  post 'submit_entry' => 'entries#index'
end
