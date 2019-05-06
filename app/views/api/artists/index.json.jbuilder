# json.array! @artists, :id, :name, :is_verified

@artists.each do |artist| 
    json.set! artist.id do 
        json.name artist.name
    end
end 