# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
user1 = User.create(first_name: "Keith", last_name: "Wong", username: "KRWong12", email: "KRWappAcademy@gmail.com", password: "thisisapass")
user2 = User.create(first_name: "Aaron", last_name: "Mondshine", username: "Amoon", email: "am@gmail.com", password: "aaronishere")
user3 = User.create(first_name: "Greg", last_name: "Park", username: "Greggles", email: "greggles@yahoo.com", password: "diamond5")
user4 = User.create(first_name: "Jared", last_name: "Tan", username: "SunTanJar", email: "jard@hotmail.com", password: "OhMyGawd")
user5 = User.create(first_name: "Daniel", last_name: "Kwon", username: "DK", email: "DK@gmail.com", password: "what")
user6 = User.create(first_name: "Janet", last_name: "Lee", username: "GhettoBlasta", email: "rapgawd@gmail.com", password: "waitreally")


Project.delete_all

project1 = Project.create(user_id: user1.id, title: "A collection of Goodies", splash_id: 1, item_order: [])

Item.delete_all

item1 = Item.create(project_id: project1.id, source_url: "lista.png", description: "something good")
item2 = Item.create(project_id: project1.id, source_url: "twoasdf.png", description: "something bad")
item3 = Item.create(project_id: project1.id, source_url: "tree.png", description: "something sweet")
item4 = Item.create(project_id: project1.id, source_url: "fort.png", description: "something long")

project1.update(item_order: [item4.id, item3.id, item1.id, item2.id])