json.set! @annotation.id do 
    json.author @annotation.user 
    json.song @annotation.song 
    json.body @annotation.body
    json.links @annotation.links do |link|
        json.link link.link 
    end
end
