class TasksController < ApplicationController

    def index
        render json: Task.all, status: 200
    end
end
