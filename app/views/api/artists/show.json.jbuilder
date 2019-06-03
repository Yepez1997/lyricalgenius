json.set! @artist.id do 
    json.extract! @artist,:name, :is_verified
    json.photo url_for(@artist.photo)
    # json.albums @artist.albums do |album| 
    #     json.album_name album.album_name
    #     json.songs album.songs do |song|
    #         json.photo url_for(song.album.photo)
    #         json.title song.title
    #         json.genre song.genre 
    #     end
    # end     
    json.songs  @artist.songs do |song|
        json.id song.id 
        json.photo url_for(song.album.photo)
        json.title song.title
        json.genre song.genre 
    end
end 
