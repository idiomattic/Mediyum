# == Schema Information
#
# Table name: follows
#
#  id               :bigint           not null, primary key
#  follower_id      :integer          not null
#  followed_user_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Follow < ApplicationRecord
  validates :follower_id, :followed_user_id, presence: true
  validates_uniqueness_of :follower_id, :scope => [:followed_user_id]

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followed_user,
    primary_key: :id,
    foreign_key: :followed_user_id,
    class_name: :User

end
