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
require 'test_helper'

class YumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
