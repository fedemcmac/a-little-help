class Api::JobsController < ApplicationController

    def create
        job = Job.create(post_params)
        job.user = @current_user
        job.save
        if job.valid?
            render json: { job: FullJobSerializer.new(job) }, status: :created
        else
            render json: { errors: job.errors.full_messages }, status: :not_accepted
        end
    end

    def index
        jobs = Job.all
        render json: jobs, each_serializer: FullJobSerializer
    end

    def update
        job = Job.find(params[:id])
        job.update(post_params)
        render json: { job: FullJobSerializer.new(job) }
    end

    # def browse_jobs
    #     others_jobs = Job.all.where("user_id != ?", @current_user.id)
    #     available_jobs = others_jobs.where("id NOT IN(SELECT job_id FROM user_jobs WHERE user_jobs.user_id = ?)", @current_user.id)
    #     render json: available_jobs, each_serializer: FullJobSerializer
    # end

    def show
        job = Job.find(params[:id])
        render json: { job: FullJobSerializer.new(job) }
    end

    def accept_job
        user_job = UserJob.create(job_id: params[:job_id], user_id: @current_user.id)
        job = Job.find(user_job.job_id)
        render json: { job: FullJobSerializer.new(job) }
    end
    
    def destroy
        job = Job.find_by(id: params[:id], user_id: @current_user.id )
        job.destroy
    end

    private

    def post_params
        params.require(:job).permit(:user_id, :title, :summary, :category, :description)
    end

end
