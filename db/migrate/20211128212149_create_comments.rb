class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :commenter_id, null: false
      t.integer :recipe_id, null: false
      t.timestamps
    end
    add_index :comments, :recipe_id
  end
end
