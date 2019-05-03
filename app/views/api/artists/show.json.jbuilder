json.extract! @artist, :name, :is_verified
json.albums do @artist.albums do |album| 
    json.album_name album.album_name
    json.songs do @album.songs |song|
        json.title = song.title
        json.genre = song.genre 
    end
end     
# need to do a json array x