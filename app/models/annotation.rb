class Annotation < ApplicationRecord
    validates :author_id, :song_id, :body, presence: true 

    belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User 

    belongs_to :song,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Song

    has_many :links,
    primary_key: :id,
    foreign_key: :annotation_id,
    class_name: :Link

end
