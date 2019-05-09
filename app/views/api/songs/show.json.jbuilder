# json.song do
    json.id @song.id 
    json.title @song.title
    json.lyrics @song.lyrics
    json.genre @song.genre
    json.artist @song.artist.name
    json.album @song.album.album_name
    # json.annotations @song.annotations
    json.annotations @song.annotations.each do |annotation|
        json.annotation annotation.id
        json.links annotation.links do |link|
            json.link link.link
        end 
    end
    json.annotation_ids @song.annotation_ids
    json.photo url_for(@song.album.photo)
# end

# json.annotations do
#     json.annotations @song.annotations.each do |annotation|
#         json.annotation annotation.id
#         json.links annotation.links do |link|
#             json.link link.link
#         end 
#     end
# end

