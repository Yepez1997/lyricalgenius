
    json.id @song.id 
    json.title @song.title
    json.lyrics @song.lyrics
    json.genre @song.genre
    json.artist @song.artist.name
    json.album @song.album.album_name
    json.photo url_for(@song.album.photo)
