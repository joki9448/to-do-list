class UsersController < ApplicationController

    def index 
        render json: User.all, status: 200
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
