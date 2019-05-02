class Api::ArtistsController < ApplicationController

    def index 
        @artists = Artist.all
    end

    # use jbuilder to show an artists songs 
    def show
        @artist = Artist.find(params[:id])
    end

    def artist_params
        params.require(:artist).permit(:name)
    end
    
end
