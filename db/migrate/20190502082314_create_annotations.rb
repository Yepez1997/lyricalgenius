class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.integer :author_id, null: false 
      t.integer :song_id, null: false 
      t.integer :annotation_id
      t.integer :start_index, null: false 
      t.integer :end_index, null: false 
      t.timestamps
    end
  end
end
