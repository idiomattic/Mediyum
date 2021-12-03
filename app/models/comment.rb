# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  body         :text             not null
#  commenter_id :integer          not null
#  recipe_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Comment < ApplicationRecord
  validates :body, :commenter_id, :recipe_id, presence: true
  
  belongs_to :commenter,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :User

  belongs_to :recipe,
    primary_key: :id,
    foreign_key: :recipe_id,
    class_name: :Recipe

  has_many :yums,
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: :Yum
    # optional: true

  # has_many :users_who_yummed,
  #   through: :yums,
  #   source: :yummer
end
