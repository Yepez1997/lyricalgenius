class Api::AlbumsController < ApplicationController

    def index 
        @albums = Album.all
    end

    def show 
        @album = Album.find(params[:id])
    end

    def album_params 
        params.require(:album).permit(:album_name)
    end
    
end
