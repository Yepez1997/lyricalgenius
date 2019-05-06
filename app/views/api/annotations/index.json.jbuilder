@annotations.each do |annotation|
    json.set! annotation.id do
        json.author annotation.user
        json.song annotation.song 
    end
end