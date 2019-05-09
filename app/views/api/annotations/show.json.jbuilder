
    json.annotation_id @annotation.id
    json.author @annotation.user.username 
    json.song @annotation.song.title
    json.song_id @annotation.song.id
    json.body @annotation.body
    json.links @annotation.links do |link|
        json.link link.link 
    end
    json.link_ids @annotation.link_ids

#FIXME: remove if statement if broken 

