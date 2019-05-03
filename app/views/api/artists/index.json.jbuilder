# json.array! @artists, :id, :name, :is_verified

@artists.each do |artist| 
    json.set! artis.id do 
        json.title artist.title
        json.genre artist.artist
    end
end 