json.extract! @song, :id, :title, :genre, :lyrics
json.artist @song.artist.name
json.album @song.album.album_name