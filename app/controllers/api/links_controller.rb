class Api::LinksController < ApplicationController
    
    def index 
        # all the links 
        @links = Link.all
    end

    def create
        # want to make the links unique 
        @link = Link.create(link_params)
        # TODO: need to look back at this 
        @link[:annotation_id] = params[:link][:annotation_id]
        # should link to the rest of the links 
        if @link.save!
            render '/api/links/show'
        else 
            render json: @link.errors.full_messages, status: 422
        end

        
    end

    def show 
        @link = Link.find(params[:id])
    end
 
   
    #TODO: change naming convention
    # link should be an integer 
    def link_params
        params.require(:link).permit(:link, :annotation_id)
    end

end
