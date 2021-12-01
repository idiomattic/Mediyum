demo = User.create([
  { email: 'demo@demo.demo', password: 'qwerty', name: 'Demo User'}
])

users = User.create([
  { email: 'matthewjlese@gmail.com', password: '111111', name: 'Matt Lese'},
  { email: 'steve@demo.demo', password: '111111', name: 'Steve'},
  { email: 'jeff@demo.demo', password: '111111', name: 'Jeff'},
  { email: 'suzie@demo.demo', password: '111111', name: 'Suzie'}
])

stories = Story.create([
  { title: 'How to test that your stories are working', body: 'seed some data, firstly', author_id: 3}
])

comments = Comment.create([
  { body: 'just a plain old comment', commenter_id: 3, story_id: 1},
  { body: 'I like this content', commenter_id: 7, story_id: 1}
])

follows = Follow.create([
  { follower_id: 1, followed_user_id: 2},
  { follower_id: 1, followed_user_id: 3},
  { follower_id: 2, followed_user_id: 3}
])

yums = Yum.create([
  { yummer_id: 1, story_id: 1 },
  { yummer_id: 1, story_id: 1, comment_id: 1 },
  { yummer_id: 2, story_id: 1 },
  { yummer_id: 2, story_id: 3 }
])