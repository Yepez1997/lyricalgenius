@annotations.each do |annotation|
    json.set! annotation.id do
        json.author annotation.user.username
        json.body annotation.body
        json.song annotation.song.title
        json.links annotation.links do |link|
            json.id link.link 
        end
    end
end