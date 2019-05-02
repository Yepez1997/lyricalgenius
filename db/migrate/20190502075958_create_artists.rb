class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.boolean :is_verified, default: false
      t.timestamps
    end
    add_index :artists, :name, unique: true 
  end
end
