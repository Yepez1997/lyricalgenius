@annotations.each do |annotation|
    json.set! annotation.id do
        json.author annotation.user.username
        json.body annotation.body
        json.song annotation.song.title
        json.song_id annotation.song.id
        json.links annotation.links do |link|
            json.link link.link 
        end
    end
end