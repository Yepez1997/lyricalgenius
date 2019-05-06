class Api::LinksController < ApplicationController
    
    def index 
        # all the links 
        @links = Link.all
    end

    def create
        # want to make the links unique 
        @link = Link.create(link_params)
        @link[:annotation_id] = params[:annotation_id]
        # should link to the rest of the links 
        if @link.save!
            render '/api/links'
        
    end

    def show

    
    TODO: change naming convention
    # link should be an integer 
    def link_params
        params.require(:link).permit(:link)
    end

end
