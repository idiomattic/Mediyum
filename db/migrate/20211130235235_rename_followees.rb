class RenameFollowees < ActiveRecord::Migration[5.2]
  def change
    rename_column :follows, :followed_user_id, :followed_user_id
  end
end
