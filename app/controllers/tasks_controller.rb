class TasksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        render json: Task.all, status: 200
    end

    def create
        task = Task.create!(new_task_params)
        render json: task, status: 201;
    end

    private

    def render_unprocessable_entity(invalid)
        render json: {error: invalid.record.errors}, status: 422
    end
    
    def new_task_params
        params.permit(:task, :user_id)
    end
end
