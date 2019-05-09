
    json.id @song.id 
    json.title @song.title
    json.lyrics @song.lyrics
    json.genre @song.genre
    json.artist @song.artist.name
    json.album @song.album.album_name
    #json.annotations @song.annotations
    json.annotations @song.annotations.each do |annotation|
        json.annotation annotation.id
        json.links annotation.links do |link|
            json.link link.link
        end 
    end
    json.photo url_for(@song.album.photo)
