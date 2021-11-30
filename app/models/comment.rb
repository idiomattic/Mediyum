# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  body         :text             not null
#  commenter_id :integer          not null
#  story_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Comment < ApplicationRecord
  validates :body, :commenter_id, :story_id, presence: true
  
  belongs_to :commenter,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :User

  belongs_to :story,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Story

  has_many :yums,
    primary_key: :id,
    foreign_key: :comment_id,
    class_name: :Yum
    # optional: true

  # has_many :users_who_yummed,
  #   through: :yums,
  #   source: :yummer
end
