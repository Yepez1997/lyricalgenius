class Annotation < ApplicationRecord

    validates :author_id, :song_id, :start_index, :end_index, presence: true 
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

end
