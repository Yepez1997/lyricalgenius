class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :artist_id, null: false 
      t.string :album_name, null: false 
      t.timestamps
    end
  end
end
