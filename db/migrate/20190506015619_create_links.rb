class CreateLinks < ActiveRecord::Migration[5.2]
  def change
    create_table :links do |t|
      t.integer :annotation_id
      t.integer :link
      t.timestamps
    end
  end
end

