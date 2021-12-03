class RenameFollowees < ActiveRecord::Migration[5.2]
  def change
    rename_column :follows, :followee_id, :followed_user_id
  end
end
