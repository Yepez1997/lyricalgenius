class Comment < ApplicationRecord

    validates :author_id, :song_id, :body, presence: true 

    belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id, 
    class_name: :User 


end
