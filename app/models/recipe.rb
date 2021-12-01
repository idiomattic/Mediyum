# == Schema Information
#
# Table name: recipes
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Recipe < ApplicationRecord
  validates :title, :body, :author_id, presence: true
  
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments,
    primary_key: :id,
    foreign_key: :recipe_id,
    class_name: :Comment

  has_many :yums,
    primary_key: :id,
    foreign_key: :recipe_id,
    class_name: :Yum
  
  has_many :users_who_yummed,
    through: :yums,
    source: :yummer
end
