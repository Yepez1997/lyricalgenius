class Artist < ApplicationRecord

    validates :name, presence: true

    has_one_attached :photo

    has_many :albums,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Album

    has_many :songs,
    through: :albums,
    source: :songs 


    
end
