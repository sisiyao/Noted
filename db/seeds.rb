# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# User seeds
User.delete_all
User.create(username:"guest", password:"password")
User.create(username:"sisiyao", password:"password")
User.create(username:"charleswang0", password:"password2")
User.create(username:"sarahlee0", password:"password3")
User.create(username:"christinechang0", password:"password4")
User.create(username:"michaelyao0", password:"password5")
User.create(username:"mengwu0", password:"password6")
User.create(username:"jennyqian0", password:"password7")
User.create(username:"yacobaannobil0", password:"password8")
User.create(username:"faithkim0", password:"password9")
User.create(username:"sooyeonkang0", password:"password10")

# Collection seeds
Collection.delete_all
Collection.create(name: "Quotes", user_id: 1)
Collection.create(name: "Work", user_id: 1)
Collection.create(name: "Random Thoughts", user_id: 1)
Collection.create(name: "Dogs", user_id: 1)
Collection.create(name: "Cats", user_id: 1)
Collection.create(name: "Horses", user_id: 1)
Collection.create(name: "Best Places", user_id: 1)
Collection.create(name: "Things to Remember", user_id: 1)
Collection.create(name: "Project 1", user_id: 1)
Collection.create(name: "Project 2", user_id: 1)
Collection.create(name: "Project 3", user_id: 1)
Collection.create(name: "Project 4", user_id: 1)
Collection.create(name: "Project 5", user_id: 1)
Collection.create(name: "Project 6", user_id: 1)
Collection.create(name: "Project 7", user_id: 1)
Collection.create(name: "Project 8", user_id: 1)
Collection.create(name: "Project 9", user_id: 1)
Collection.create(name: "Project 10", user_id: 1)
