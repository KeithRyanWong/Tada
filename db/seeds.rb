# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
user1 = User.create(first_name: "Jared", last_name: "Tan", username: "SunTanJar", email: "jard@gmail.com", password: "thisisapass", image_url: 'jtan')
user5 = User.create(first_name: "Evelyn", last_name: "Lee", username: "Ev", email: "ev@gmail.com", password: "everlynn", image_url: 'Ev')
user2 = User.create(first_name: "Greg", last_name: "Park", username: "Greggles", email: "greggles@yahoo.com", password: "diamond5", image_url: 'greggles')
user3 = User.create(first_name: "Daniel", last_name: "Kwon", username: "DK", email: "DK@gmail.com", password: "wtfdaniel", image_url: 'dkwon')
user4 = User.create(first_name: "Janet", last_name: "Lee", username: "GhettoBlasta", email: "rapgawd@gmail.com", password: "waitreally", image_url: 'jlee')


Project.delete_all

project1 = Project.create(user_id: user1.id, title: "What're you looking at?", splash_id: 1, item_order: [])
project2 = Project.create(user_id: user3.id, title: "Feast of the Eyes", splash_id: 1, item_order: [])
project3 = Project.create(user_id: user3.id, title: "Poppin", splash_id: 1, item_order: [])



Item.delete_all

item1 = Item.create(project_id: project1.id, source_url: "project1/allef-vinicius-107831", description: "Something good", source_type: 'png')
item2 = Item.create(project_id: project1.id, source_url: "project1/aneta-ivanova-776_u2ybvm", description: "Something warm", source_type: 'png')
item3 = Item.create(project_id: project1.id, source_url: "project1/joshua-earle-64814", description: "Something cool", source_type: 'png')
item4 = Item.create(project_id: project1.id, source_url: "project1/mike-wilson-284606", description: "Something blue", source_type: 'png')
item5 = Item.create(project_id: project1.id, source_url: "project1/nik-macmillan-226092", description: "Something beautiful", source_type: 'png')
item6 = Item.create(project_id: project1.id, source_url: "project1/tim-marshall-173957", description: "Something new", source_type: 'png')
item7 = Item.create(project_id: project1.id, source_url: "project1/348462762_jqyt4f", description: '', source_type: 'webm')

item8 = Item.create(project_id: project2.id, source_url: "project2/alexandra-kusper-217070", description: 'Berries and pancakes, berries and pancakes', source_type: 'png')
item9 = Item.create(project_id: project2.id, source_url: "project2/brenda-godinez-228181", description: 'Dat chocolate doe', source_type: 'png')
item10 = Item.create(project_id: project2.id, source_url: "project2/brooke-lark-158019", description: 'What are these even?', source_type: 'png')
item11 = Item.create(project_id: project2.id, source_url: "project2/brooke-lark-229136", description: 'Avacado ftw', source_type: 'png')
item12 = Item.create(project_id: project2.id, source_url: "project2/lauren-lester-205923", description: 'Looks yummy', source_type: 'png')

item13 = Item.create(project_id: project3.id, source_url: "project4/adam-birkett-291598", description: 'Why are there even palm trees in California?', source_type: 'png')
item14 = Item.create(project_id: project3.id, source_url: "project4/andrew-worley-299600", description: 'Why you standing there with that baloon?', source_type: 'png')
item15 = Item.create(project_id: project3.id, source_url: "project4/ian-dooley-298769", description: 'What?', source_type: 'png')
item16 = Item.create(project_id: project3.id, source_url: "project4/john-towner-128480", description: "That's cool", source_type: 'png')
item17 = Item.create(project_id: project3.id, source_url: "project4/michal-grosicki-221225", description: "There's always a wall", source_type: 'png')
item18 = Item.create(project_id: project3.id, source_url: "project4/588727175_rkxejf", description: "This is how young people do", source_type: 'webm')

project1.update(item_order: [item7.id, item4.id, item3.id, item5.id,item1.id, item2.id, item6.id], splash_id: item5.id)
project2.update(item_order: [item8.id, item9.id, item10.id, item12.id, item11.id], splash_id: item9.id)
project3.update(item_order: [item13.id, item18.id, item14.id, item15.id, item16.id, item17.id], splash_id: item15.id)


Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])
Project.create(user_id: user3.id, title: "Poppin", splash_id: item17.id, item_order: [])


Comment.delete_all

Comment.create(project_id: project1.id, body: "Wow, great work! Love everything", user_id: user2.id)
Comment.create(project_id: project1.id, body: "Thanks you for saying so!", user_id: user1.id)
Comment.create(project_id: project1.id, body: "This is epic", user_id: user3.id)
Comment.create(project_id: project1.id, body: "Eh", user_id: user4.id)

Like.delete_all

Like.create(user_id: user1.id, project_id: project1.id)
Like.create(user_id: user1.id, project_id: project2.id)
Like.create(user_id: user2.id, project_id: project1.id)
Like.create(user_id: user3.id, project_id: project3.id)
Like.create(user_id: user3.id, project_id: project1.id)
Like.create(user_id: user3.id, project_id: project2.id)
Like.create(user_id: user4.id, project_id: project3.id)
Like.create(user_id: user5.id, project_id: project3.id)
