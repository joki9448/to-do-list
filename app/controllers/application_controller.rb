class ApplicationController < ActionController::Base
  # skip_forgery_protection
  skip_before_action :verify_authenticity_token
  include ActionController::Cookies
end
