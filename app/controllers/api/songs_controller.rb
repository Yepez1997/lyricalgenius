class Api::SongsController < ApplicationController

    def show
    end

    def index
    end

    def song_params
        params.require(:song).permit(:lyrics, :title, :genre, :lyrics)
    end

end
