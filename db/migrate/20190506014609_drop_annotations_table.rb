class DropAnnotationsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :annotations 
  end
end
