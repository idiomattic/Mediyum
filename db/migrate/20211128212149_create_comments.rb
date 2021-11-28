class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :commenter_id, null: false
      t.integer :story_id, null: false
      t.timestamps
    end
    add_index :comments, :story_id
  end
end
