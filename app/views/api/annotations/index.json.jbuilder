@annotations.each do |annotation|
    json.set! annotation.id do
        json.body annotation.body
        json.author annotation.user
        json.song annotation.song 
    end
end