@annotations.each do |annotation|
    json.set! annotation.id do
        json.author annotation.user
        json.body annotation.body
        json.song annotation.song
        json.links annotation.links do |link|
            json.link link.link 
        end
    end
end