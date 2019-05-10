# json.array! @artists, :id, :name, :is_verified

@artists.each do |artist| 
    json.set! artist.id do 
        json.id artist.id
        json.name artist.name
        json.photo url_for(artist.photo)
    end
end 