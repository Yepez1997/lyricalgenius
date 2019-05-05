json.set! @album.id do 
    json.extract! @album, :album_name
    json.photo url_for(@album.photo)
    json.artist @album.artist, :name
    json.songs @album.songs do |song|
        json.title song.title 
        json.genre song.genre
    end
end