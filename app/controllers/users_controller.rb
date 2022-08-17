class UsersController < ApplicationController

    def index 
        render json: User.all, status: 200
    end

    def create
        user = User.create!(user_params)
        render json: user, status: 201
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
