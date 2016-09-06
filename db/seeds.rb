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
Collection.create(name: "Shower thoughts", user_id: 1)
Collection.create(name: "Good food", user_id: 1)
Collection.create(name: "Today I Learned", user_id: 1)
Collection.create(name: "Capstone Project", user_id: 1)
Collection.create(name: "Random", user_id: 1)
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

#Note seeds
Note.create(title: "Bruce Lee", body: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.", user_id: 1)
Note.create(title: "Walt Whitman", body: "Keep your face always toward the sunshine - and shadows will fall behind you.", user_id: 1)
Note.create(title: "Freddy Mercury", body: "I dont want to be a star, I want to be a legend.", user_id: 1)
Note.create(title: "L, Death Note", body: "Being alone is better than being with the wrong person.", user_id: 1)
Note.create(title: "David Brower", body: "We don't inherit the earth from our ancestors, we borrow it from our children.", user_id: 1)
Note.create(title: "Robert Murray McCheyne", body: "Joy is increased by spreading it to others.", user_id: 1)
Note.create(title: "Jim Carrey", body: "I think everybody should get rich and famous and do everything they ever dreamed of so they can see that it's not the answer.", user_id: 1)
Note.create(title: "Turing", body: "I'm not scared of a computer passing the turing test... I'm terrified of one that intentionally fails it.", user_id: 1)
Note.create(title: "Sun", body: "Our sun is part of someone else's constellation.", user_id: 1)
Note.create(title: "Afterlife", body: "If I saw a ghost, it would be the happiest day of my life... even if it was a scary ghost that planned to kill me, at least I would know there's an afterlife.", user_id: 1)
Note.create(title: "Dog", body: "My dog understand several human words. I don’t understand any dog barks. He may be smarter than me.", user_id: 1)
Note.create(title: "Santa", body: "People in Christmas movies who don't believe in Santa are always portrayed as jerks, even though they're technically right", user_id: 1)
Note.create(title: "Mischief managed", body: "You should be able to say 'mischief managed' to close all incognito tabs on your computer.", user_id: 1)

#Collection tagging seeds
CollectionTagging.create(note_id: 1, collection_id: 1)
CollectionTagging.create(note_id: 1, collection_id: 6)
CollectionTagging.create(note_id: 2, collection_id: 1)
CollectionTagging.create(note_id: 2, collection_id: 6)
CollectionTagging.create(note_id: 3, collection_id: 1)
CollectionTagging.create(note_id: 3, collection_id: 6)
CollectionTagging.create(note_id: 4, collection_id: 1)
CollectionTagging.create(note_id: 4, collection_id: 6)
CollectionTagging.create(note_id: 5, collection_id: 1)
CollectionTagging.create(note_id: 5, collection_id: 6)
CollectionTagging.create(note_id: 6, collection_id: 1)
CollectionTagging.create(note_id: 6, collection_id: 6)
CollectionTagging.create(note_id: 7, collection_id: 1)
CollectionTagging.create(note_id: 7, collection_id: 6)
CollectionTagging.create(note_id: 8, collection_id: 2)
CollectionTagging.create(note_id: 9, collection_id: 2)
CollectionTagging.create(note_id: 10, collection_id: 2)
CollectionTagging.create(note_id: 11, collection_id: 2)
CollectionTagging.create(note_id: 12, collection_id: 2)
CollectionTagging.create(note_id: 13, collection_id: 2)
