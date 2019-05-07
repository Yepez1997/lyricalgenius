json.set! @annotation.id do 
    json.author @annotation.user.username 
    json.song @annotation.song.title
    json.song_id @annotation.song.id
    json.body @annotation.body
        json.links @annotation.links do |link|
            json.link link.link 
        end
end
#FIXME: remove if statement if broken 

