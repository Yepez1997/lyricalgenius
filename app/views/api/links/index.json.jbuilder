@links.each do |link|
    json.set! link.id do 
        json.link link.link
        json.song link.annotation.song_id
        json.annotation_id link.annotation.id
    end 
end 

