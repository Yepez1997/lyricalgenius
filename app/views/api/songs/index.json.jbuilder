# json.array! @songs, :id, :title, :genre, :artist

@songs.each do |song| 
    json.set! song.id do 
        json.id song.id
        json.title song.title
        json.artist song.artist.name 
        json.artist_verified song.artist.is_verified
        json.genre song.genre
        json.photo url_for(song.album.photo)
    end
end 