# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# demo user seed
demo = User.create([{ email: 'demo@demo.demo', password: 'qwerty', name: 'Demo User'}])
# dummy users
users = User.create([{ email: 'steve@demo.demo', password: '111111', name: 'Steve'},
{ email: 'jeff@demo.demo', password: '111111', name: 'Jeff'},
{ email: 'suzie@demo.demo', password: '111111', name: 'Suzie'}])

stories = Story.create([{ title: 'How to test that your stories are working', body: 'seed some data, firstly', author_id: 3}])