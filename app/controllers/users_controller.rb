class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create

    def show
        user = User.find_by(id: params[:user_id])
        if user 
            render json: user 
        else 
            render json: { error: "Not authorized" }, status: 401
        end
    end

    def create
        user = User.create!(new_user_params)
        render json: user, status: 201
    end

    private

    def new_user_params
        params.permit(:username, :password)
    end
end
