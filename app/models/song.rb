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

    has_many :links,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Link

    has_many :annotations,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Annotation


end
