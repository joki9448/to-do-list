class ApplicationController < ActionController::Base
  skip_forgery_protection
  # skip_before_action :verify_authenticity_token
  include ActionController::Cookies
  before_action :authorized

  def authorized
    render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
    # user = User.find_by(id: session[:user_id])
    # render json: {error: "Not Authorized"}, status: :unauthorized unless user
  end

end
