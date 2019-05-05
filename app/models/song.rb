class Song < ApplicationRecord

    validates :album_id, :lyrics, :title, :genre, presence: true 

    has_one_attached :photo
    
    belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id, 
    class_name: :Album

    has_one :artist,
    through: :album,
    source: :artist


end
