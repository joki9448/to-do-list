class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def show
        current_user = User.find(session[:user_id])
        render json: current_user
        # if user 
        #     render json: user 
        # else 
        #     render json: { error: "Not authorized" }, status: 401
        # end
    end

    def create
        user = User.create!(new_user_params)
        render json: user, status: 201
    end

    private

    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: 422
    end

    def new_user_params
        params.permit(:username, :password)
    end
end
