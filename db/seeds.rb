Recipe.destroy_all
User.destroy_all

require 'open-uri'

demo = User.create([{ email: 'demo@demo.demo', password: 'qwerty', name: 'Demo User'}])
file = URI.open('https://mediyum-dev.s3.us-west-1.amazonaws.com/placeholder_user_image.png')
demo.photo.attach(io: file, filename: 'placeholder_user_image.png')

user1 = User.create(email: 'sergio@demo.demo', password: '111111', name: 'Sergio')
user2 = User.create(email: 'jeff@demo.demo', password: '111111', name: 'Jeff')
user3 = User.create(email: 'suzie@demo.demo', password: '111111', name: 'Suzie')
user4 = User.create(email: 'ken@demo.demo', password: '111111', name: 'Ken M')
user5 = User.create(email: 'kevin@demo.demo', password: '111111', name: 'Kevin')
user6 = User.create(email: 'Lisa@demo.demo', password: '111111', name: 'Lisa')
user7 = User.create(email: 'Kathy@demo.demo', password: '111111', name: 'Kathy')
user8 = User.create(email: 'hannah@demo.demo', password: '111111', name: 'Hannah')

sergio = URI.open('https://mediyum-dev.s3.us-west-1.amazonaws.com/sergio.jpg')
jeff = URI.open('https://mediyum-dev.s3.us-west-1.amazonaws.com/jeff.jpg')
suzie = URI.open('https://mediyum-dev.s3.us-west-1.amazonaws.com/suzie.jpg')
kenm = URI.open('https://mediyum-dev.s3.us-west-1.amazonaws.com/ken.jpg')
kevin = URI.open('https://mediyum-dev.s3.us-west-1.amazonaws.com/kevin.jpg')
lisa = URI.open('https://mediyum-dev.s3.us-west-1.amazonaws.com/lisa.jpg')
kathy = URI.open('https://mediyum-dev.s3.us-west-1.amazonaws.com/Kathy.jpg')
hannah = URI.open('https://mediyum-dev.s3.us-west-1.amazonaws.com/hannah.jpg')






recipes = Recipe.create([
  { title: 'Cereal', body: 'milk, then bowl, then cereal', author_id: 3}
  # { title: 'Cereal', body: 'milk, then bowl, then cereal', author_id: 3},
  # { title: 'Cereal', body: 'milk, then bowl, then cereal', author_id: 3},
  # { title: 'Cereal', body: 'milk, then bowl, then cereal', author_id: 3},
  # { title: 'Cereal', body: 'milk, then bowl, then cereal', author_id: 3},
  # { title: 'Cereal', body: 'milk, then bowl, then cereal', author_id: 3},
  # { title: 'Cereal', body: 'milk, then bowl, then cereal', author_id: 3},
  # { title: 'Cereal', body: 'milk, then bowl, then cereal', author_id: 3},
  # { title: 'Cereal', body: 'milk, then bowl, then cereal', author_id: 3}
])

comments = Comment.create([
  { body: 'just a plain old comment', commenter_id: 3, recipe_id: 1},
  { body: 'I like this content', commenter_id: 7, recipe_id: 1}
])

follows = Follow.create([
  { follower_id: 1, followed_user_id: 2},
  { follower_id: 1, followed_user_id: 3},
  { follower_id: 2, followed_user_id: 3}
])

yums = Yum.create([
  { yummer_id: 1, recipe_id: 1 },
  { yummer_id: 1, recipe_id: 1, comment_id: 1 },
  { yummer_id: 2, recipe_id: 1 },
  { yummer_id: 2, recipe_id: 3 }
])