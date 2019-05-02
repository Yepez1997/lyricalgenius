class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.integer :album_id, null: false 
      t.text :lyrics, null: false 
      t.string :title, null: false 
      t.string :genre, null: false 
      t.timestamps
    end
  end
end
