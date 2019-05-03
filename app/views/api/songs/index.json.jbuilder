# json.array! @songs, :id, :title, :genre, :artist

@songs.each do |song| 
    json.set! song.id do 
        json.title song.title
        json.artist song.artist.name 
        json.genre song.genre
    end
end 