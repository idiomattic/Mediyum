# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  color_code      :string
#
class User < ApplicationRecord
  validates :email, :session_token, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many :recipes,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Recipe

  has_many :comments,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :Comment

  has_many :follows, #their own follows
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :received_follows, #follows of them
    primary_key: :id,
    foreign_key: :followed_user_id,
    class_name: :Follow

  has_many :users_followed, #users they are following
    through: :follows,
    source: :followed_user

  has_many :users_following, #users following them
    through: :received_follows,
    source: :follower

  has_many :yums,
    primary_key: :id,
    foreign_key: :yummer_id,
    class_name: :Yum

  has_many :followed_recipes,
    through: :users_followed,
    source: :recipes

  has_one_attached :photo

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    (user && user.is_valid_password?(password)) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    new_token = SecureRandom.urlsafe_base64
    while User.find_by(session_token: new_token)
      new_token = SecureRandom.urlsafe_base64
    end
    new_token
  end

end
