# == Schema Information
#
# Table name: yums
#
#  id         :bigint           not null, primary key
#  yummer_id  :integer          not null
#  story_id   :integer          not null
#  comment_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Yum < ApplicationRecord
  validates :yummer_id, :story_id, presence: true
  validates_uniqueness_of :yummer_id, :scope => [:story_id]
  validates_uniqueness_of :yummer_id, :scope => [:comment_id]

  belongs_to :yummer,
    primary_key: :id,
    foreign_key: :yummer_id,
    class_name: :User

  belongs_to :story,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Story

  belongs_to :comment, optional: true,
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: :Comment
    # optional: true
end
