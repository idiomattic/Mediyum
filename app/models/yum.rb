# == Schema Information
#
# Table name: yums
#
#  id         :bigint           not null, primary key
#  yummer_id  :integer          not null
#  recipe_id  :integer
#  comment_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Yum < ApplicationRecord
  validates :yummer_id, presence: true

  belongs_to :yummer,
    primary_key: :id,
    foreign_key: :yummer_id,
    class_name: :User

  belongs_to :recipe, optional: true,
    primary_key: :id,
    foreign_key: :recipe_id,
    class_name: :Recipe

  belongs_to :comment, optional: true,
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: :Comment
end
