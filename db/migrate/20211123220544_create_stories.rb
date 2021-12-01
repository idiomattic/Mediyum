class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :recipes, :title
    add_index :recipes, :author_id
  end
end
