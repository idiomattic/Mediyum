class AddColor < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :color_code, :string
  end
end
