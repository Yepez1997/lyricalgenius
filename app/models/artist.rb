class Artist < ApplicationRecord

    validates :name, presence: true

    has_many :albums,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Album

    # should get me all the songs of an artist 
    has_many :songs,
    through: :albums,
    source: :songs 


    
end
