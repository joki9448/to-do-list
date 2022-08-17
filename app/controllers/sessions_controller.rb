class SessionsController < ApplicationController
  # def index
  #   session[:session_hello] ||= "World"
  #   cookies[:cookies_hello] ||= "World"
  #   render json: { session: session, cookies: cookies.to_hash}
  # end
  def create
    user = User.find_by(user_params)
    session[:user_id] = user.id 
    render json: user
  end

  private

  def user_params 
    params.permit(:username, :password)
  end
end
