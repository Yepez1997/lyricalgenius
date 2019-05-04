json.set! @song.id do 
    json.extract! @song, :title, :genre, :lyrics
    json.artist @song.artist.name
    json.album @song.album.album_name
end