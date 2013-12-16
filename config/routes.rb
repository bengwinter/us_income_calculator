AmericanWealth::Application.routes.draw do
  root 'entries#index'
  post 'submit_entry' => 'entries#submit'
end
