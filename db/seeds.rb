Recipe.destroy_all
User.destroy_all
Yum.destroy_all
Follow.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('Recipe')
ActiveRecord::Base.connection.reset_pk_sequence!('User')
ActiveRecord::Base.connection.reset_pk_sequence!('Yum')
ActiveRecord::Base.connection.reset_pk_sequence!('Follow')

require 'open-uri'

#starting at id=10 for some reason
demo = User.create(email: 'demo@demo.demo', password: 'qwerty', name: 'Demo User')
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

user1.photo.attach(io: sergio, filename: 'sergio.jpg')
user2.photo.attach(io: jeff, filename: 'jeff.jpg')
user3.photo.attach(io: suzie, filename: 'suzie.jpg')
user4.photo.attach(io: kenm, filename: 'kenm.jpg')
user5.photo.attach(io: kevin, filename: 'kevin.jpg')
user6.photo.attach(io: lisa, filename: 'lisa.jpg')
user7.photo.attach(io: kathy, filename: 'kathy.jpg')
user8.photo.attach(io: hannah, filename: 'hannah.jpg')

#starting at id=1
recipe1 = Recipe.create(title: 'Cereal', body: 'milk, then bowl, then cereal', author_id: 10) #demo user
recipe2 = Recipe.create(title: 'Olive Oil Fried Egg', 
  body: 'Heat pan over medium-high heat.  Add 2 tbsp extra-virgin olive oil.  Once oil is shimmering, gently add egg to pan and season with salt and pepper.  Baste with the hot oil to set the top of the egg.  Remove when whites are set and yolk is still runny.', 
  author_id: 11)
recipe3 = Recipe.create(title: 'Cereal', 
  body: 'milk, then bowl, then cereal', 
  author_id: 12)
recipe4 = Recipe.create(title: 'Cereal', 
  body: 'milk, then bowl, then cereal', 
  author_id: 13)
recipe5 = Recipe.create(title: 'Cereal', 
  body: 'milk, then bowl, then cereal', 
  author_id: 14)
recipe6 = Recipe.create(title: 'Cereal', 
  body: 'milk, then bowl, then cereal', 
  author_id: 15)
recipe7 = Recipe.create(title: 'Cereal', 
  body: 'milk, then bowl, then cereal', 
  author_id: 16)
recipe8 = Recipe.create(title: 'Cereal', 
  body: 'milk, then bowl, then cereal', 
  author_id: 17)
recipe8 = Recipe.create(title: 'Cereal', 
  body: 'milk, then bowl, then cereal', 
  author_id: 18)


comments = Comment.create([
  { body: 'will make this for my kids later!', commenter_id: 11, recipe_id: 1},
  { body: 'looks yummy', commenter_id: 12, recipe_id: 2},
  { body: 'eg', commenter_id: 15, recipe_id: 2},
  { body: 'looks yummy', commenter_id: 12, recipe_id: 2},
  { body: 'looks yummy', commenter_id: 12, recipe_id: 2},
  { body: 'looks yummy', commenter_id: 12, recipe_id: 2},
])

follows = Follow.create([
  { follower_id: 10, followed_user_id: 12},
  { follower_id: 1, followed_user_id: 3},
  { follower_id: 2, followed_user_id: 3},
  { follower_id: 2, followed_user_id: 3},
  { follower_id: 2, followed_user_id: 3},
  { follower_id: 2, followed_user_id: 3},
  { follower_id: 2, followed_user_id: 3},
  { follower_id: 2, followed_user_id: 3},
  { follower_id: 2, followed_user_id: 3},
  { follower_id: 2, followed_user_id: 3},
  { follower_id: 2, followed_user_id: 3},
])

yums = Yum.create([
  { yummer_id: 1, recipe_id: 1 },
  { yummer_id: 1, recipe_id: 1, comment_id: 1 },
  { yummer_id: 2, recipe_id: 1 },
  { yummer_id: 2, recipe_id: 3 },
  { yummer_id: 1, recipe_id: 1, comment_id: 1 },
  { yummer_id: 2, recipe_id: 1 },
  { yummer_id: 2, recipe_id: 3 },
  { yummer_id: 1, recipe_id: 1, comment_id: 1 },
  { yummer_id: 2, recipe_id: 1 },
  { yummer_id: 2, recipe_id: 3 },
])