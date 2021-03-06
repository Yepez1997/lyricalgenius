# json.array! @albums, :id, :album_name, :artist

@albums.each do |album| 
    json.set! album.id do 
        json.title album.title
        json.genre album.artist
        json.photo url_for(album.photo)
    end
end 