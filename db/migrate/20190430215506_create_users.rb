class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false 
      t.string :password_digest, null: false 
      t.string :session_token, null: false
      t.integer :iq_points, null: false 
      t.string :header_image_url, null: false 
      t.timestamps
    end
  end
end
