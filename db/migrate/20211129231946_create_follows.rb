class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :followed_user_id, null: false
      t.timestamps
    end
    add_index :follows, :follower_id
    add_index :follows, :followed_user_id
  end
end
