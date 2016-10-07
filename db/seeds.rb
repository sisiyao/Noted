# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

# User seeds
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
Collection.create(name: "Quotes - All", user_id: 1)
Collection.create(name: "Shower thoughts", user_id: 1)
Collection.create(name: "Life pro tips", user_id: 1)
Collection.create(name: "Shitty life pro tips", user_id: 1)
Collection.create(name: "Crazy ideas", user_id: 1)
Collection.create(name: "Today I learned", user_id: 1)
Collection.create(name: "Save", user_id: 1)
Collection.create(name: "Quotes - Steinbeck", user_id: 1)
Collection.create(name: "Quotes - Einstein", user_id: 1)
Collection.create(name: "Quotes - Dr. Seuss", user_id: 1)
Collection.create(name: "Quotes - Ghandi", user_id: 1)

#Note seeds
#1-7
Note.create(title: "Bruce Lee", body: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.", user_id: 1)
Note.create(title: "Walt Whitman", body: "Keep your face always toward the sunshine - and shadows will fall behind you.", user_id: 1)
Note.create(title: "Freddy Mercury", body: "I dont want to be a star, I want to be a legend.", user_id: 1)
Note.create(title: "L, Death Note", body: "Being alone is better than being with the wrong person.", user_id: 1)
Note.create(title: "David Brower", body: "We don't inherit the earth from our ancestors, we borrow it from our children.", user_id: 1)
Note.create(title: "Robert Murray McCheyne", body: "Joy is increased by spreading it to others.", user_id: 1)
Note.create(title: "Jim Carrey", body: "I think everybody should get rich and famous and do everything they ever dreamed of so they can see that it's not the answer.", user_id: 1)

#8-16
Note.create(title: "John Steinbeck", body: "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.", user_id: 1)
Note.create(title: "John Steinbeck", body: "The discipline of the written word punishes both stupidity and dishonesty.", user_id: 1)
Note.create(title: "John Steinbeck", body: "If you're in trouble, or hurt or need - go to the poor people. They're the only ones that'll help - the only ones.", user_id: 1)
Note.create(title: "John Steinbeck", body: "No man really knows about other human beings. The best he can do is to suppose that they are like himself.", user_id: 1)
Note.create(title: "John Steinbeck", body: "Writers are a little below clowns and a little above trained seals.", user_id: 1)
Note.create(title: "John Steinbeck", body: "It is a common experience that a problem difficult at night is resolved in the morning after the committee of sleep has worked on it.", user_id: 1)
Note.create(title: "John Steinbeck", body: "No one wants advice - only corroboration.", user_id: 1)
Note.create(title: "John Steinbeck", body: "The profession of book writing makes horse racing seem like a solid, stable business.", user_id: 1)
Note.create(title: "John Steinbeck", body: "What good is the warmth of summer, without the cold of winter to give it sweetness.", user_id: 1)

#17-26
Note.create(title: "Einstein", body: "Imagination is more important than knowledge.", user_id: 1)
Note.create(title: "Einstein", body: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", user_id: 1)
Note.create(title: "Einstein", body: "Anyone who has never made a mistake has never tried anything new.", user_id: 1)
Note.create(title: "Einstein", body: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", user_id: 1)
Note.create(title: "Einstein", body: "Try not to become a man of success, but rather try to become a man of value.", user_id: 1)
Note.create(title: "Einstein", body: "No problem can be solved from the same level of consciousness that created it.", user_id: 1)
Note.create(title: "Einstein", body: "Science without religion is lame, religion without science is blind.", user_id: 1)
Note.create(title: "Einstein", body: "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.", user_id: 1)
Note.create(title: "Einstein", body: "Great spirits have always encountered violent opposition from mediocre minds.", user_id: 1)
Note.create(title: "Einstein", body: "Everything should be made as simple as possible, but not simpler.", user_id: 1)

#27-36
Note.create(title: "Dr. Seuss", body: "Today you are you! That is truer than true! There is no one alive who is you-er than you!", user_id: 1)
Note.create(title: "Dr. Seuss", body: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", user_id: 1)
Note.create(title: "Dr. Seuss", body: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", user_id: 1)
Note.create(title: "Dr. Seuss", body: "Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.", user_id: 1)
Note.create(title: "Dr. Seuss", body: "Don't cry because it's over. Smile because it happened.", user_id: 1)
Note.create(title: "Dr. Seuss", body: "A person's a person, no matter how small.", user_id: 1)
Note.create(title: "Dr. Seuss", body: "You're off to Great Places! Today is your day! Your mountain is waiting, So... get on your way!", user_id: 1)
Note.create(title: "Dr. Seuss", body: "Sometimes the questions are complicated and the answers are simple.", user_id: 1)
Note.create(title: "Dr. Seuss", body: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.", user_id: 1)
Note.create(title: "Dr. Seuss", body: "Think left and think right and think low and think high. Oh, the thinks you can think up if only you try!", user_id: 1)

#37-46
Note.create(title: "Ghandi", body: "You must be the change you wish to see in the world.", user_id: 1)
Note.create(title: "Ghandi", body: "The weak can never forgive. Forgiveness is the attribute of the strong.", user_id: 1)
Note.create(title: "Ghandi", body: "An eye for eye only ends up making the whole world blind.", user_id: 1)
Note.create(title: "Ghandi", body: "Live as if you were to die tomorrow; learn as if you were to live forever.", user_id: 1)
Note.create(title: "Ghandi", body: "Happiness is when what you think, what you say, and what you do are in harmony.", user_id: 1)
Note.create(title: "Ghandi", body: "First they ignore you, then they laugh at you, then they fight you, then you win.", user_id: 1)
Note.create(title: "Ghandi", body: "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.", user_id: 1)
Note.create(title: "Ghandi", body: "The best way to find yourself is to lose yourself in the service of others.", user_id: 1)
Note.create(title: "Ghandi", body: "Strength does not come from physical capacity. It comes from an indomitable will.", user_id: 1)
Note.create(title: "Ghandi", body: "A man is but the product of his thoughts; what he thinks, he becomes.", user_id: 1)

#47-56
Note.create(title: "Turing", body: "I'm not scared of a computer passing the turing test... I'm terrified of one that intentionally fails it.", user_id: 1)
Note.create(title: "Sun", body: "Our sun is part of someone else's constellation.", user_id: 1)
Note.create(title: "Afterlife", body: "If I saw a ghost, it would be the happiest day of my life... even if it was a scary ghost that planned to kill me, at least I would know there's an afterlife.", user_id: 1)
Note.create(title: "Dog", body: "My dog understand several human words. I don’t understand any dog barks. He may be smarter than me.", user_id: 1)
Note.create(title: "Santa", body: "People in Christmas movies who don't believe in Santa are always portrayed as jerks, even though they're technically right", user_id: 1)
Note.create(title: "Mischief managed", body: "You should be able to say 'mischief managed' to close all incognito tabs on your computer.", user_id: 1)
Note.create(title: "Song", body: "Randomly hearing your favorite song on the radio is more satisfying than playing it directly from your ipod.", user_id: 1)
Note.create(title: "Calendar", body: "A calendar doesn't actually tell you what day it is. It just gives you a list of options to choose from.", user_id: 1)
Note.create(title: "Dentists", body: "Dentists make money when people get cavities, if 9/10 dentists recommend a certain toothbrush/toothpaste, shouldn't we be more suspicious?", user_id: 1)
Note.create(title: "Nationwide", body: "If you get into a car accident and you both have Nationwide, whose side are they on?", user_id: 1)

#57-66
Note.create(title: "Dexterity", body: "Change hands halfway through brushing teeth, after 2 weeks dexterity will improve and new neural pathways are created.", user_id: 1)
Note.create(title: "Room painting", body: "After painting, take a picture of the lid(s) and email it to yourself with the room(s) you painted that color in.", user_id: 1)
Note.create(title: "Tools", body: "Throw some silica packets in your toolbox to prevent your tools from rusting.", user_id: 1)
Note.create(title: "Tie", body: "When wearing a tie on a windy day, slip a coin down the inside of the hem to keep the tie from blowing around.", user_id: 1)
Note.create(title: "Movie", body: "When you're watching a movie with friends, turn on Closed Captioning.", user_id: 1)
Note.create(title: "Work recognition", body: "If you have a work related compliment for someone, e-mail them the compliment and copy their boss.", user_id: 1)
Note.create(title: "Flood", body: "If you live in an area that can flood, put a good axe in your attic that can get through the roof.", user_id: 1)
Note.create(title: "Chrome tabs", body: "You can mute individual chrome tabs by right clicking them ", user_id: 1)
Note.create(title: "Flu", body: "Flu season is coming; take the stairs (if you can). Sick people and their germs are much more likely to take the elevator than the stairs.", user_id: 1)
Note.create(title: "Turbulence", body: "If you hate the feeling of turbulence, try to get a seat above or next to the wings on the plane, as this section of the aircraft doesn't move as much as the head / tail during turbulent parts of the journey.", user_id: 1)

#67-76
Note.create(color: 'blue', title: "Antifreeze", body: "If you drink a whole gallon of anti-freeze, you won't ever be cold ever again.", user_id: 1)
Note.create(color: 'blue', title: "Driving", body: "If you're a passenger in a car, occasionally scream WATCH OUT! for no reason. The driver will thank you for keeping them vigilant.", user_id: 1)
Note.create(color: 'blue', title: "Friends", body: "Don't make friends, especially in other countries. That way, you won't have to care about world events.", user_id: 1)
Note.create(color: 'blue', title: "Bus", body: "If you don't want people to sit next to you on the bus just don't shower!", user_id: 1)
Note.create(color: 'blue', title: "Billionaire", body: "The more children you have, the bigger chance there is that one of them becomes a billionaire.", user_id: 1)
Note.create(color: 'blue', title: "Learning guitar", body: "If you're learning to play the guitar, do it in a subway station or on a street corner to earn extra money", user_id: 1)
Note.create(color: 'blue', title: "Choking", body: "If you're choking on food trying eating more food to try to force the other food down.", user_id: 1)
Note.create(color: 'blue', title: "Peppers", body: "Don't know if that's a jalepeño or a green pepper? Cut off a piece and place gently on your eye.", user_id: 1)
Note.create(color: 'blue', title: "Keys", body: "Engrave your house keys with your address so that people know where to return them if lost.", user_id: 1)
Note.create(color: 'blue', title: "Cake", body: "Keep cake moist by simply eating it all in one sitting.", user_id: 1)

#77-86
Note.create(color: 'yellow', title: "Check", body: "The size of a check should always be proportional to the amount it's written for.", user_id: 1)
Note.create(color: 'yellow', title: "Scotch", body: "Create a Scotch and name it Responsibly. Your slogan would be Please drink Responsibly. Cash in on the unlimited free advertising.", user_id: 1)
Note.create(color: 'yellow', title: "Harry Potter", body: "Remake all of the the Harry Potter books and movies where Harry is sorted into Slytherin house. The series is about Harry helping Voldemort in his rise to power and Harry's attempts to become the greatest dark wizard of all time.", user_id: 1)
Note.create(color: 'yellow', title: "Subreddit", body: "If a user goes to a subreddit that doesn't exist, it will automatically be created and that person is a mod", user_id: 1)
Note.create(color: 'yellow', title: "Android OS", body: "Android's next OS should be called Orange so when compared to the iPhone it will be like comparing Apples to Oranges", user_id: 1)
Note.create(color: 'yellow', title: "Rap concert", body: "Every time a rapper holds out the mic and tells the audience to say something, everyone should get a tiny discount on their ticket price for having to perform.", user_id: 1)
Note.create(color: 'yellow', title: "Debate time", body: "During the presidential debates, after a candidate's time runs out, have the volume of their mic slowly drop over the next 30 seconds. So they'll start speaking faster and faster trying to get their words out before they're completely silenced.", user_id: 1)
Note.create(color: 'yellow', title: "Upvote", body: "Whenever you laugh at a Reddit post it will automatically upvote the post by using the camera on your smartphone", user_id: 1)
Note.create(color: 'yellow', title: "Steve Harvey", body: "Have Steve Harvey announce the election results so we get a bit of added suspense even after it's over.", user_id: 1)
Note.create(color: 'yellow', title: "Debates", body: "The debates should have a laugh track.", user_id: 1)

#87-96
Note.create(color: 'red', title: "TIL 1920s Man", body: "TIL that in the 1920s a Chicago man convinced his wife to pull out all her teeth then refused to get her dentures because it was 'cheaper to feed her with soup than solid food'. She took him to court and he was ordered to get her 2 new sets of teeth and a beefsteak a week.", user_id: 1)
Note.create(color: 'red', title: "TIL William Still", body: "TIL William Still, the father of the Underground Railroad, interviewed and kept records of every escaped slave he came across. Once, while interviewing a man, he discovered that the man was actually his long-lost brother.", user_id: 1)
Note.create(color: 'red', title: "TIL Soup Kitchen", body: "TIL the world's largest soup kitchen is the Golden Temple, the holiest temple for Sikhs, which is located in Amritsar, Punjab, India. The Golden Temple can serve free food for up to 100,000 - 300,000 people every day, regardless of faith, religion, or background.", user_id: 1)
Note.create(color: 'red', title: "TIL Tulsa Center of the Universe", body: "TIL of the Tulsa Center of the Universe. An acoustic anomaly located in Oklahoma. When one stands in the center of the circle and makes a noise, that noise is echoed back several times louder than it was made, but no one standing outside the circle can hear a thing.", user_id: 1)
Note.create(color: 'red', title: "TIL Golden Orb Spiders", body: "TIL 1.2 million golden orb spiders were individually collected to weave the largest piece of golden spider silk cloth in the world", user_id: 1)
Note.create(color: 'red', title: "TIL Sri Lanka", body: "TIL The penalty for killing an elephant in Sri Lanka is death", user_id: 1)
Note.create(color: 'red', title: "TIL Landmines", body: "TIL that the 20,000 landmines used during the Britain/Argentina conflict over the Falklands have led to a booming population of penguins. Cows and humans avoid the fenced-off fields, but penguins are too light to set off the mines. The deadly fields have turned into penguin sanctuaries.", user_id: 1)
Note.create(color: 'red', title: "TIL Oscar the Cat", body: "TIL of Oscar the Cat who predicted when people in his nursing home were about to die with such accuracy that staff would call relatives.", user_id: 1)
Note.create(color: 'red', title: "TIL Bryan Cranston", body: "TIL Bryan Cranston spent hundreds of hours practicing roller skating so that he could perform in the episode of Malcolm in the Middle where he teaches Malcom to roller blade.", user_id: 1)
Note.create(color: 'red', title: "TIL Norway", body: "TIL Norway actually introduced Salmon Sushi to Japan", user_id: 1)

#Collection tagging seeds
CollectionTagging.create(note_id: 1, collection_id: 1)
CollectionTagging.create(note_id: 2, collection_id: 1)
CollectionTagging.create(note_id: 3, collection_id: 1)
CollectionTagging.create(note_id: 4, collection_id: 1)
CollectionTagging.create(note_id: 5, collection_id: 1)
CollectionTagging.create(note_id: 6, collection_id: 1)
CollectionTagging.create(note_id: 7, collection_id: 1)
CollectionTagging.create(note_id: 8, collection_id: 1)
CollectionTagging.create(note_id: 9, collection_id: 1)
CollectionTagging.create(note_id: 10, collection_id: 1)
CollectionTagging.create(note_id: 11, collection_id: 1)
CollectionTagging.create(note_id: 12, collection_id: 1)
CollectionTagging.create(note_id: 13, collection_id: 1)
CollectionTagging.create(note_id: 14, collection_id: 1)
CollectionTagging.create(note_id: 15, collection_id: 1)
CollectionTagging.create(note_id: 16, collection_id: 1)
CollectionTagging.create(note_id: 17, collection_id: 1)
CollectionTagging.create(note_id: 18, collection_id: 1)
CollectionTagging.create(note_id: 19, collection_id: 1)
CollectionTagging.create(note_id: 20, collection_id: 1)
CollectionTagging.create(note_id: 21, collection_id: 1)
CollectionTagging.create(note_id: 22, collection_id: 1)
CollectionTagging.create(note_id: 23, collection_id: 1)
CollectionTagging.create(note_id: 24, collection_id: 1)
CollectionTagging.create(note_id: 25, collection_id: 1)
CollectionTagging.create(note_id: 26, collection_id: 1)
CollectionTagging.create(note_id: 27, collection_id: 1)
CollectionTagging.create(note_id: 28, collection_id: 1)
CollectionTagging.create(note_id: 29, collection_id: 1)
CollectionTagging.create(note_id: 30, collection_id: 1)
CollectionTagging.create(note_id: 31, collection_id: 1)
CollectionTagging.create(note_id: 32, collection_id: 1)
CollectionTagging.create(note_id: 33, collection_id: 1)
CollectionTagging.create(note_id: 34, collection_id: 1)
CollectionTagging.create(note_id: 35, collection_id: 1)
CollectionTagging.create(note_id: 36, collection_id: 1)
CollectionTagging.create(note_id: 37, collection_id: 1)
CollectionTagging.create(note_id: 38, collection_id: 1)
CollectionTagging.create(note_id: 39, collection_id: 1)
CollectionTagging.create(note_id: 40, collection_id: 1)
CollectionTagging.create(note_id: 41, collection_id: 1)
CollectionTagging.create(note_id: 42, collection_id: 1)
CollectionTagging.create(note_id: 43, collection_id: 1)
CollectionTagging.create(note_id: 44, collection_id: 1)
CollectionTagging.create(note_id: 45, collection_id: 1)
CollectionTagging.create(note_id: 46, collection_id: 1)

CollectionTagging.create(note_id: 8, collection_id: 8)
CollectionTagging.create(note_id: 9, collection_id: 8)
CollectionTagging.create(note_id: 10, collection_id: 8)
CollectionTagging.create(note_id: 11, collection_id: 8)
CollectionTagging.create(note_id: 12, collection_id: 8)
CollectionTagging.create(note_id: 13, collection_id: 8)
CollectionTagging.create(note_id: 14, collection_id: 8)
CollectionTagging.create(note_id: 15, collection_id: 8)
CollectionTagging.create(note_id: 16, collection_id: 8)

CollectionTagging.create(note_id: 17, collection_id: 9)
CollectionTagging.create(note_id: 18, collection_id: 9)
CollectionTagging.create(note_id: 19, collection_id: 9)
CollectionTagging.create(note_id: 20, collection_id: 9)
CollectionTagging.create(note_id: 21, collection_id: 9)
CollectionTagging.create(note_id: 22, collection_id: 9)
CollectionTagging.create(note_id: 23, collection_id: 9)
CollectionTagging.create(note_id: 24, collection_id: 9)
CollectionTagging.create(note_id: 25, collection_id: 9)
CollectionTagging.create(note_id: 26, collection_id: 9)

CollectionTagging.create(note_id: 27, collection_id: 10)
CollectionTagging.create(note_id: 28, collection_id: 10)
CollectionTagging.create(note_id: 29, collection_id: 10)
CollectionTagging.create(note_id: 30, collection_id: 10)
CollectionTagging.create(note_id: 31, collection_id: 10)
CollectionTagging.create(note_id: 32, collection_id: 10)
CollectionTagging.create(note_id: 33, collection_id: 10)
CollectionTagging.create(note_id: 34, collection_id: 10)
CollectionTagging.create(note_id: 35, collection_id: 10)
CollectionTagging.create(note_id: 36, collection_id: 10)

CollectionTagging.create(note_id: 37, collection_id: 11)
CollectionTagging.create(note_id: 38, collection_id: 11)
CollectionTagging.create(note_id: 39, collection_id: 11)
CollectionTagging.create(note_id: 40, collection_id: 11)
CollectionTagging.create(note_id: 41, collection_id: 11)
CollectionTagging.create(note_id: 42, collection_id: 11)
CollectionTagging.create(note_id: 43, collection_id: 11)
CollectionTagging.create(note_id: 44, collection_id: 11)
CollectionTagging.create(note_id: 45, collection_id: 11)
CollectionTagging.create(note_id: 46, collection_id: 11)

CollectionTagging.create(note_id: 47, collection_id: 2)
CollectionTagging.create(note_id: 48, collection_id: 2)
CollectionTagging.create(note_id: 49, collection_id: 2)
CollectionTagging.create(note_id: 50, collection_id: 2)
CollectionTagging.create(note_id: 51, collection_id: 2)
CollectionTagging.create(note_id: 52, collection_id: 2)
CollectionTagging.create(note_id: 53, collection_id: 2)
CollectionTagging.create(note_id: 54, collection_id: 2)
CollectionTagging.create(note_id: 55, collection_id: 2)
CollectionTagging.create(note_id: 56, collection_id: 2)

CollectionTagging.create(note_id: 57, collection_id: 3)
CollectionTagging.create(note_id: 58, collection_id: 3)
CollectionTagging.create(note_id: 59, collection_id: 3)
CollectionTagging.create(note_id: 60, collection_id: 3)
CollectionTagging.create(note_id: 61, collection_id: 3)
CollectionTagging.create(note_id: 62, collection_id: 3)
CollectionTagging.create(note_id: 63, collection_id: 3)
CollectionTagging.create(note_id: 64, collection_id: 3)
CollectionTagging.create(note_id: 65, collection_id: 3)
CollectionTagging.create(note_id: 66, collection_id: 3)

CollectionTagging.create(note_id: 67, collection_id: 4)
CollectionTagging.create(note_id: 68, collection_id: 4)
CollectionTagging.create(note_id: 69, collection_id: 4)
CollectionTagging.create(note_id: 70, collection_id: 4)
CollectionTagging.create(note_id: 71, collection_id: 4)
CollectionTagging.create(note_id: 72, collection_id: 4)
CollectionTagging.create(note_id: 73, collection_id: 4)
CollectionTagging.create(note_id: 74, collection_id: 4)
CollectionTagging.create(note_id: 75, collection_id: 4)
CollectionTagging.create(note_id: 76, collection_id: 4)

CollectionTagging.create(note_id: 77, collection_id: 5)
CollectionTagging.create(note_id: 78, collection_id: 5)
CollectionTagging.create(note_id: 79, collection_id: 5)
CollectionTagging.create(note_id: 80, collection_id: 5)
CollectionTagging.create(note_id: 81, collection_id: 5)
CollectionTagging.create(note_id: 82, collection_id: 5)
CollectionTagging.create(note_id: 83, collection_id: 5)
CollectionTagging.create(note_id: 84, collection_id: 5)
CollectionTagging.create(note_id: 85, collection_id: 5)
CollectionTagging.create(note_id: 86, collection_id: 5)

CollectionTagging.create(note_id: 87, collection_id: 6)
CollectionTagging.create(note_id: 88, collection_id: 6)
CollectionTagging.create(note_id: 89, collection_id: 6)
CollectionTagging.create(note_id: 90, collection_id: 6)
CollectionTagging.create(note_id: 91, collection_id: 6)
CollectionTagging.create(note_id: 92, collection_id: 6)
CollectionTagging.create(note_id: 93, collection_id: 6)
CollectionTagging.create(note_id: 94, collection_id: 6)
CollectionTagging.create(note_id: 95, collection_id: 6)
CollectionTagging.create(note_id: 96, collection_id: 6)

CollectionTagging.create(note_id: 1, collection_id: 7)
CollectionTagging.create(note_id: 11, collection_id: 7)
CollectionTagging.create(note_id: 21, collection_id: 7)
CollectionTagging.create(note_id: 31, collection_id: 7)
CollectionTagging.create(note_id: 41, collection_id: 7)
CollectionTagging.create(note_id: 51, collection_id: 7)
CollectionTagging.create(note_id: 61, collection_id: 7)
CollectionTagging.create(note_id: 71, collection_id: 7)
