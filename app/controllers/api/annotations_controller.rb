class Api::AnnotationsController < ApplicationController
    
    def create 
    end

    def index 
    end

    def show 
    end 

    def destroy 
    end 

    def update 
    end

    def annotation_params
        params.require(:annotation).permit(:start_index, :end_index)
    end 
end
