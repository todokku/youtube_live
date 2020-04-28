Rails.application.routes.draw do
  get 'auto_play/URL'
  get 'auto_play/index'

  post 'cids' => 'auto_play#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
end
