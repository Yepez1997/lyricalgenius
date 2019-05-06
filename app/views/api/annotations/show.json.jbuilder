json.set! @annotation.id do 
    json.author @annotation.user 
    json.song @annotation.song 
    json.body @annotation.body
        if @annotation.links.present? 
        json.links @annotation.links do |link|
            json.link link.link 
        end
    end
end
#FIXME: remove if statement if broken 

