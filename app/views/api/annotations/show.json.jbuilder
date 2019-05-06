json.set! @annotation.id do 
    json.author @annotation.user.username 
    json.song @annotation.song.title
    json.body @annotation.body
        if @annotation.links.present? 
        json.links @annotation.links do |link|
            json.link link.link 
        end
    end
end
#FIXME: remove if statement if broken 

