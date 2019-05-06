class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.integer :author_id, null: false 
      t.integer :song_id, null: false
      t.text :body, null: false 
      t.timestamps
    end
  end
end
