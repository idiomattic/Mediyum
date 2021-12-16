class RemoveYumCommentNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :yums, :recipe_id, true
  end
end
