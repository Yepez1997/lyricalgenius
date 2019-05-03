class Api::SongsController < ApplicationController

    def show
        @song = Song.find(params[:id])
    end

    def index
        @songs = Song.all
    end

    def song_params
        params.require(:song).permit(:lyrics, :title, :genre, :lyrics)
    end

end
