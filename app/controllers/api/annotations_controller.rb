class Api::AnnotationsController < ApplicationController

    before_action :require_logged_in
    
    def create 
        # get song id
        # auhtor id 
        
    end

    def index 
        # find the current users annotations 
        @annotations = current_user.annotations
    end

    def show 
        @annotation = current_user.annotations.find(params[:id])
    end 

    def update 
    end

    def annotation_params
        params.require(:annotation).permit(:start_index, :end_index)
    end 
end
