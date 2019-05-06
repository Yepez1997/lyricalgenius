class Api::AnnotationsController < ApplicationController

    before_action :require_logged_in
    
    def create 
        # get song idx
        # auhtor id 
        @annotation = Annotation.new(annotation_params)
        @annotation[:author_id] = current_user
        # maybe it is [:annoation][:song_id]
        # but perhaps [:song_id]
        # should show up as all the new annotatio
        @annoation[:song_id] = params[:song_id]
        if @annoation.save!
            render '/api/annotations'
        else 
            render :json => { "ERROR" }
        end

    end

    def index 
        # find the current users annotations 
        # retrieves the current users annotations 
        @annotations = current_user.annotations
    end

    def show 
        @annotation = current_user.annotations.find(params[:id])
    end 

    # dont think need to support update rn
    def update 
    end

    def annotation_params
        params.require(:annotation).permit(:body)
    end 
end
