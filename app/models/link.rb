class Link < ApplicationRecord
    
    validates :annotation_id, :link, presence: true; 

    belongs_to :annotation, 
    primary_key: :id, 
    foreign_key: :annotation_id, 
    class_name: :Annotation 
    
end
