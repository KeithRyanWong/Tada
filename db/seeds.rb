# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
user0 = User.create(first_name: "Default", last_name: "User", username: "AwesomeDemoUser", email: "awesome@default.com", password: "thisisapass", image_url: 'PlaceholderPic_nq0s9d', bio: "Hi, this is Keith Wong, the creator of this site. I hope you like this small demo! I chose to clone Behance because it is an amazing platform for sharing creative ideas and for connecting people together through art. I hope that one day my applications will be used by the kinds of passionat people who make this world so very interesting to live in.", location: "San Francsico, CA, 94107")
user1 = User.create(first_name: "Jared", last_name: "Tan", username: "SunTanJar", email: "jard@gmail.com", password: "thisisapass", image_url: 'jtan', bio: "I started out as a photographer shooting for my school newspaper and grew to really exploring people's everyday expressions. It's become a focus and theme of my work. Currently, I'm pursuing a web development career, and photography has taken a bit of a backseat, but I'm always looking for ways to incorporate it into my work.", location: "San Francsico, CA, 94107", website: "https://github.com/JaredTan")
user5 = User.create(first_name: "Evelyn", last_name: "Lee", username: "Ev", email: "ev@gmail.com", password: "everlynn", image_url: 'Ev', bio: "Stay humble friends.", location: "San Francsico, CA, 94107", website: "https://github.com/eunnah")
user2 = User.create(first_name: "Greg", last_name: "Park", username: "Greggles", email: "greggles@yahoo.com", password: "diamond5", image_url: 'greggles', bio: "Diamond 5 for lyfe. I've been doing 3-D modeling for about 3 years now. I started in the videogame industry making splash art for friends' indie games and eventually got introduced to Maya by someone I worked alongside. After playing around with it I knew I had to continue doing it.", location: "San Francsico, CA, 94107", website: "https://github.com/keius")
user3 = User.create(first_name: "Daniel", last_name: "Kwon", username: "DK", email: "DK@gmail.com", password: "wtfdaniel", image_url: 'dkwon', bio: "When I was young I drew and painted alot. Went to a business school in Korea for a bit and served in the military before coming back home. Now that I'm here I want to get back into art and all it has to offer.", location: "San Francsico, CA, 94107", website: "https://github.com/danielkwon7")
user11 = User.create(first_name: "Janet", last_name: "Lee", username: "GhettoBlasta", email: "rapgawd@gmail.com", password: "waitreally", image_url: 'jlee', bio: "Hip hop is a big part of my life. I love how the culture includes every facet of art and creativity. Whether its music, dance, or art, it's hip hop.", location: "San Francsico, CA, 94107", website: "https://github.com/lee-cjanet")
user6 = User.create(first_name: "Emmeran", last_name: "Richard", username: "typER", email: "contact@emmeranrichard.fr", password: "oisdh2", image_url: 'Emmeran%20Richard/Type/263b2f1468441.58fc9f402e073', bio: "28.\nGraphic & type design.\nType, type and type again.\nAvailable ~ contact[at]emmeranrichard.fr", location: "Toulouse, France", website: "http://www.emmeranrichard.fr/")
user7 = User.create(first_name: "Sean", last_name: "Hobman", username: "Hobbsman", email: "http://seanhobman.com", password: "123456", image_url: 'Sean%20Hobman/cd048a452111.5672b62d73372', bio: "Freelance Art Director & Designer", location: "London, United Kingdom", website: "http://seanhobman.com")
user8 = User.create(first_name: "Zach", last_name: "Greathouse", username: "Greathouse", email: "zgh@hotmail.com", password: "123456", image_url: 'greathouse')
user9 = User.create(first_name: "Tyrion", last_name: "Lannister", username: "Tdawg", email: "got@gmail.com", password: "123456", image_url: 'ooolmipd9oizi4caiqwq')
user10 = User.create(first_name: "Gerg", last_name: "Pak", username: "Nyasa", email: "meow@gmail.com", password: "lololol", image_url: '
jsveahmpwm4lt9ngtl9d')


Project.delete_all

project1 = Project.create(user_id: user1.id, title: "What're you looking at?", splash_id: 1, item_order: [])
project2 = Project.create(user_id: user3.id, title: "Feast of the Eyes", splash_id: 1, item_order: [])
project3 = Project.create(user_id: user3.id, title: "Poppin", splash_id: 1, item_order: [])
project4 = Project.create(user_id: user6.id, title: "36 Days Of Type", splash_id: 1, item_order: [])
project5 = Project.create(user_id: user6.id, title: "36 Days Of Type p.2", splash_id: 1, item_order: [])
project6 = Project.create(user_id: user6.id, title: "36 Days Of Type p.3", splash_id: 1, item_order: [])



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

item19 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/93860350923537.58dd312d414e2", source_type: 'png')
item20 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/ec928f50923537.58dd3514a64e0_1", source_type: 'png')
item21 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/59f3e850923537.58dd3514a3521_1", source_type: 'png')
item22 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/0c3a5a50923537.58dd3514a2120", source_type: 'png')
item23 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/778fd150923537.58dd3514a3a15", source_type: 'png')


item24 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/5ebb3b50923537.58dd3514a24b0", source_type: 'png')
item25 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/f24eb450923537.58dd3514a43af", source_type: 'png')
item26 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/7f2a9050923537.58dd3514a40d4", source_type: 'png')
item27 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/2b5e4350923537.58dd3514a543a", source_type: 'png')
item28 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/44f33150923537.58dd3514a1c48", source_type: 'png')

item29 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/a9124050923537.58dd3514a4c5a", source_type: 'png')
item30 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/e671dc50923537.58dd3514a329f", source_type: 'png')
item31 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/7c939050923537.58dd3514a5f71", source_type: 'png')
item32 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/6125bf50923537.58dd3514a6ab4", source_type: 'png')

item33 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/6fc1af50923537.58dd3514a4965", source_type: 'png')
item34 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/6cce2250923537.58dd3514a5a53", source_type: 'png')
item35 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/a1502050923537.58dd3514a5075", source_type: 'png')
item36 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/96cb9e50923537.58dd3514a3dbd", source_type: 'png')
item37 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/cca61d50923537.58dd3514a2b01", source_type: 'png')
item38 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/dc4d2150923537.58dd3514a2eba", source_type: 'png')
item39 = Item.create(project_id: project3.id, source_url: "Emmeran%20Richard/Type/0166ce50923537.58dd312d41181", source_type: 'png')

project1.update(item_order: [item7.id, item4.id, item3.id, item5.id,item1.id, item2.id, item6.id], splash_id: item5.id)
project2.update(item_order: [item8.id, item9.id, item10.id, item12.id, item11.id], splash_id: item9.id)
project3.update(item_order: [item13.id, item18.id, item14.id, item15.id, item16.id, item17.id], splash_id: item15.id)
project4.update(item_order: [item19.id, item20.id, item21.id, item22.id, item23.id], splash_id: item19.id)
project5.update(item_order: [item24.id, item25.id, item26.id, item27.id, item28.id], splash_id: item24.id)
project5.update(item_order: [item29.id, item30.id, item31.id, item32.id], splash_id: item29.id)
project6.update(item_order: [item33.id, item34.id, item35.id, item36.id, item37.id, item38.id, item39.id], splash_id: item33.id)


Comment.delete_all

Comment.create(project_id: project1.id, body: "Wow, great work! Love everything", user_id: user2.id)
Comment.create(project_id: project1.id, body: "Thanks you for saying so!", user_id: user1.id)
Comment.create(project_id: project1.id, body: "This is epic", user_id: user3.id)
Comment.create(project_id: project1.id, body: "Eh", user_id: user11.id)
Comment.create(project_id: project1.id, body: "Good job Jared", user_id: user5.id)

Comment.create(project_id: project2.id, body: "I'm hungry now, thanks", user_id: user2.id)
Comment.create(project_id: project2.id, body: "There isn't enough food!", user_id: user5.id)
Comment.create(project_id: project2.id, body: "Love the composition!", user_id: user7.id)
Comment.create(project_id: project2.id, body: "Can you mentor me?", user_id: user11.id)
Comment.create(project_id: project2.id, body: "Wowow", user_id: user9.id)

Comment.create(project_id: project3.id, body: "Where did you find such great areas to shoot?", user_id: user2.id)
Comment.create(project_id: project3.id, body: "Such a cool architecture", user_id: user1.id)
Comment.create(project_id: project3.id, body: "Found it in Hollywood", user_id: user3.id)
Comment.create(project_id: project3.id, body: "Is this really pop culture?", user_id: user11.id)
Comment.create(project_id: project3.id, body: "Heyyyy", user_id: user5.id)




Like.delete_all

Like.create(user_id: user1.id, project_id: project2.id)
Like.create(user_id: user2.id, project_id: project1.id)
Like.create(user_id: user3.id, project_id: project1.id)
Like.create(user_id: user3.id, project_id: project2.id)
Like.create(user_id: user11.id, project_id: project3.id)
Like.create(user_id: user11.id, project_id: project3.id)
Like.create(user_id: user5.id, project_id: project1.id)
Like.create(user_id: user5.id, project_id: project2.id)
Like.create(user_id: user5.id, project_id: project3.id)
Like.create(user_id: user6.id, project_id: project1.id)
Like.create(user_id: user6.id, project_id: project3.id)
Like.create(user_id: user7.id, project_id: project3.id)
Like.create(user_id: user7.id, project_id: project1.id)
Like.create(user_id: user7.id, project_id: project2.id)
Like.create(user_id: user8.id, project_id: project1.id)
Like.create(user_id: user9.id, project_id: project3.id)
Like.create(user_id: user9.id, project_id: project1.id)
Like.create(user_id: user10.id, project_id: project2.id)
Like.create(user_id: user11.id, project_id: project3.id)
Like.create(user_id: user11.id, project_id: project1.id)
