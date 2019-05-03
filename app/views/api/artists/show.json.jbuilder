json.extract! @artist, :name, :is_verified
json.albums @artist.albums do |album| 
    json.album_name album.album_name
    json.songs album.songs do |song|
        json.title = song.title
        json.genre = song.genre 
    end
end     
# need to do a json array x