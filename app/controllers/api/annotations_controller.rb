class Api::AnnotationsController < ApplicationController

    before_action :require_logged_in
    
    def create 
        # get song idx
        # auhtor id 
        @annotation = Annotation.new(annotation_params)
        debugger 
        #TODO: chance 3 back to current user 
        @annotation[:author_id] = current_user.id
        #current_user.id
        # maybe it is [:annoation][:song_id]
        # but perhaps [:song_id]
        # should show up as all the new annotatio
        @annotation[:song_id] = params[:song_id]
        if @annotation.save!
            render "api/annotations/show"
        else 
            render json: @annotation.errors.full_messages, status: 422
        end

    end

    def index 
        # find the current users annotations 
        # retrieves the current users annotations 
        @annotations = Annotation.all
    end

    def show 
        @annotation = Annotation.find(params[:id])
    end 

    # dont think need to support update rn
    def update 
    end

    def annotation_params
        params.require(:annotation).permit(:body)
    end 
end
